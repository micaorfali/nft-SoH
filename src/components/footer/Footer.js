import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap -m-6 justify-between">
          <div className="w-full md:w-1/2 lg:w-5/12 p-10">
            <div className="flex flex-col justify-between h-full max-w-sm">
              <div className="mb-11 flex">
                <Image src="/images/logo.png" alt="" width={100} height={100} />
                {/* ajustar */}
                <span className="ml-2 w-1/4 font-Whisper align-middle py-6 text-xl leading-5">
                  Seasons of Heartbreak
                </span>
              </div>
              <div>
                <p className="md:mb-14 text-gray-500 text-sm mr-16 md:mr-0">
                  Seasons of Heartbreak captures the emotional journey of grief
                  through art. Explore each stage and find beauty in the process
                  of healing.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 md:p-6 p-10">
            <div className="flex flex-col h-full">
              <div>
                <h3 className="mb-2 font-heading font-medium text-base text-black tracking-px">
                  Follow Us On
                </h3>

                <div className="flex flex-wrap items-center space-x-5">
                  <Link href="https://twitter.com/" target="_blank">
                    <div className="w-auto p-5 bg-pink-300 rounded-full">
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6488 1.58924C13.137 1.81672 12.5967 1.9589 12.028 2.0442C12.5967 1.70298 13.0517 1.16271 13.2507 0.508707C12.7105 0.821493 12.1133 1.04897 11.4593 1.19115C10.9475 0.650883 10.2082 0.309662 9.41201 0.309662C7.87652 0.309662 6.62537 1.5608 6.62537 3.0963C6.62537 3.32378 6.65381 3.52283 6.71068 3.72187C4.40744 3.60813 2.33168 2.49916 0.938358 0.793058C0.710877 1.21958 0.568702 1.67455 0.568702 2.18638C0.568702 3.15317 1.0521 4.00622 1.81985 4.51805C1.36488 4.48962 0.938358 4.37588 0.540266 4.17683V4.20527C0.540266 5.57015 1.50706 6.70755 2.78664 6.96347C2.55916 7.02034 2.30324 7.04877 2.04733 7.04877C1.87672 7.04877 1.67767 7.02034 1.50706 6.9919C1.87672 8.10087 2.90038 8.92549 4.12309 8.92549C3.15629 9.6648 1.96202 10.1198 0.654007 10.1198C0.426526 10.1198 0.199046 10.1198 0 10.0913C1.25114 10.8875 2.70133 11.3425 4.2937 11.3425C9.44045 11.3425 12.2555 7.07721 12.2555 3.38065C12.2555 3.26691 12.2555 3.12473 12.2555 3.01099C12.7958 2.64134 13.2792 2.15794 13.6488 1.58924Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://discord.com/" target="_blank">
                    <div className="w-auto p-5 bg-pink-300 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                      </svg>
                    </div>
                  </Link>
                  <Link href="https://web.telegram.org/k/" target="_blank">
                    <div className="w-auto p-5 bg-pink-300 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 32 32"
                      >
                        {' '}
                        <path d="M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z" />{' '}
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <p className="text-gray-400 text-sm py-12">
                © Copyright 2024. <br /> All Rights Reserved by Mica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

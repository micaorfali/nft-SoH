import React from 'react'
import Button from '../button/Button'
import Discord from '../../../public/icons/Discord.js'
import Twitter from '../../../public/icons/Twitter'
import Telegram from '../../../public/icons/Telegram'

const JoinUs = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col">
        <div className="card bg-gray-300 pt-6 md:pt-12 pl-6 md:pl-12 pr-6 md:pr-12 flex-1 flex flex-col">
          <div className="bg-white p-5 flex-1">
            <h3 className="text-3xl text-black text-center font-Swanky_and_Moo_Moo mb-5">
              Join our Discord Community
            </h3>
            <p>
              Join our Discord community and access exclusive channels where you
              can share your own images and experiences of the stages of grief.
              We will select some of these contributions to create new NFTs that
              integrate your memories and emotions
            </p>
          </div>
        </div>
        <div className="bg-gray-300 py-7 text-center shadow-xl">
          <Button
            text="Join Us"
            url="https://discord.com/"
            newTab
            iconPosition="left"
            icon={<Discord />}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col">
        <div className="card bg-gray-300 pt-6 md:pt-12 pl-6 md:pl-12 pr-6 md:pr-12 flex-1 flex flex-col">
          <div className="bg-white p-5 flex-1">
            <h3 className="text-3xl text-black text-center font-Swanky_and_Moo_Moo mb-5">
              Follow Us on Social Media
            </h3>
            <p className="mb-6">
              Follow us on social media to stay updated on the latest news,
              releases, and special events. Join our community and share your
              journey with us.
            </p>
          </div>
        </div>
        <div className="bg-gray-300 py-7 flex justify-center shadow-xl">
          <Button url="https://twitter.com/" newTab icon={<Twitter />} />
          <Button url="http://telegram.org/" newTab icon={<Telegram />} />
        </div>
      </div>
    </section>
  )
}

export default JoinUs

import React from 'react'
import Button from '../button/Button'
import Discord from '../../../public/icons/Discord.js'

const JoinUs = () => {
  return (
    <section className="flex">
      <div className="w-1/2 p-12">
        <div className="bg-gray-300 pt-12 pl-12 pr-12">
          <div className="bg-white p-5">
            <h3 className="text-xl">Join our Discord Community</h3>
            <p>
              Join our Discord community and access exclusive channels where you
              can share your own images and experiences of the stages of grief.
              We will select some of these contributions to create new NFTs that
              integrate your memories and emotions
            </p>
          </div>
        </div>
        <div className="bg-gray-300 py-7 text-center">
          <Button
            text="Join Us"
            url="https://discord.com/"
            newTab
            iconPosition="left"
            icon={<Discord />}
          />
        </div>
      </div>
      <div className="w-1/2 p-12">
        hacer el otro pero para eso terminar de ajustar el anterior
      </div>
    </section>
  )
}

export default JoinUs

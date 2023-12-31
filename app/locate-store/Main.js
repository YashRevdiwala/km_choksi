import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"

const MainView = () => {
  return (
    <>
      <div className="bg-[url('/assets//inner_bg.jpg')] w-screen h-[150px] md:h-96 flex ">
        <div className="md:py-32 md:pl-12 md:absolute flex justify-center my-auto">
          <div className="text-center md:text-left bg-white h-28 w-[360px] ml-4 md:mx-8 md:w-96 bg-contain">
            <p className="text-4xl md:px-12 md:pt-8 pt-4 text-rose-700">
              Store Locator
            </p>
            <p className="md:px-12">K M Choksi</p>
          </div>
        </div>
        <Image
          src="/assets/contact/banner.jpg"
          width={2560}
          height={1440}
          alt="brand-banner"
          className="md:h-96 md:w-full md:pr-16 md:pl-64 md:flex md:justify-center md:pt-8 md:pb-8 hidden"
        />
      </div>
      <div className="py-12 px-10 flex flex-col md:flex-row">
        <div className="pt-16 flex flex-col space-y-7">
          <div>
            <p className="font-semibold text-2xl mb-3">Surat</p>
            <p>Choksi House,</p>
            <p>Opp.Regent Arcade, Ghod Dod Rd,</p>
            <p>Surat, Gujarat 395001</p>
          </div>
          <div>
            <p>
              Contact : <a href="tel:09726014777">09726014777</a>
            </p>
            <p>
              Email :
              <a href="mailto:info@kmchoksi@gmail.com">
                info@kmchoksi@gmail.com
              </a>
            </p>
          </div>
          <div className="w-[200px]">
            <Button variant="destructive">
              <Link href="https://maps.app.goo.gl/ZwKsb3Wm6Zw2LFAGA">
                View on Google Maps
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/assets/contact/surat.jpg"
          width={2560}
          height={1440}
          alt="brand-banner"
          className="h-[170px] w-[400px] md:h-auto md:w-[1000px] max-sm:pt-8 md:ml-40 flex justify-center "
        />
      </div>
      <div className="py-12 px-10 flex flex-col md:flex-row">
        <div className="md:pt-16 pt-8 flex flex-col space-y-7">
          <div>
            <p className="font-semibold text-2xl mb-3">Kosamba</p>
            <p>Dawjee Shopping Centre, 7,</p>
            <p>Mota Mandir Rd, Kothi Ground, Tarsadi,</p>
            <p>Kosamba, Gujarat 394120</p>
          </div>
          <div>
            <p>
              Contact : <a href="tel:09726014777">09726014777</a>
            </p>
            <p>
              Email :
              <a href="mailto:info@kmchoksi@gmail.com">
                info@kmchoksi@gmail.com
              </a>
            </p>
          </div>
          <div className="w-[200px]">
            <Button variant="destructive" asChild>
              <Link href="https://maps.app.goo.gl/igtSR4gciosBirGeA">
                View on Google Maps
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/assets/contact/kosamba.jpg"
          width={2560}
          height={1440}
          alt="brand-banner"
          className="h-[170px] w-[400px] md:h-auto md:w-[1000px] max-sm:pt-8 md:ml-40 flex justify-center "
        />
      </div>
      <div className="md:px-56 md:py-12 p-8">
        <div className="pb-10 flex flex-col space-y-2">
          <p className="text-2xl font-semibold ">
            We would love to hear from you.
          </p>
          <p>
            If you’ve got great products your making or looking to work with us
            then drop us a line.
          </p>
        </div>
        <form action="">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-row space-x-8">
              <Input type="text" placeholder="Your Name*" required />
              <Input type="email" placeholder="Your Email*" required />
            </div>
            <div className="flex flex-row space-x-8">
              <Input type="text" placeholder="Mobile No*" required />
              <Input type="text" placeholder="Subject" />
            </div>
            <Textarea defaultValue="Comment" />
            <div className="flex items-center space-x-2">
              <Checkbox className="rounded-none" id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <Button className="w-[200px]" variant="destructive">
              SUBMIT NOW
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default MainView

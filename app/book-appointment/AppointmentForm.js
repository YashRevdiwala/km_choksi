import { Input } from "@/components/ui/input"

const AppointmentForm = () => {
  return (
    <div className="pt-4 mt-4">
      <div className="flex flex-row bg-[url('/assets/inner_bg.jpg')] px-4 ">
        <div className="basis-1/2">
          <img src="/assets/book-appointment.jpg" className="" />
        </div>
        <div className="basis-1/2 text-center py-6 px-8">
          <p className="text-3xl font-bold">Book An Appointment</p>
          <form action="">
            <div className="flex flex-col justify-center items-center py-7">
              <Input
                type="text"
                placeholder="Your Name*"
                className="w-[500px] my-2"
              />
              <Input
                type="number"
                placeholder="Mobile number*"
                className="w-[500px] my-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AppointmentForm

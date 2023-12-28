"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const AppointmentForm = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row bg-[url('/assets/inner_bg.jpg')] md:px-4 ">
        <div className="basis-1/2 m-4">
          <img src="/assets/book-appointment.jpg" />
        </div>
        <div className="basis-1/2 text-center pt-8 md:pt-28 md:px-8 h-full">
          <p className="text-3xl font-bold">Book An Appointment</p>
          <form action="/" method="post">
            <div className="flex flex-col w-screen justify-center items-center py-7">
              <Input
                type="text"
                placeholder="Your Name*"
                className="w-[300px] md:w-[500px] my-2"
                required
              />
              <Input
                type="number"
                placeholder="Mobile number*"
                className="w-[300px] md:w-[500px] my-2"
                required
              />
              <RadioGroup
                className="flex flex-col md:flex-row max-sm:justify-start items-start my-2"
                defaultValue="Store Visit"
              >
                <div className="space-x-2 my-2 mx-16">
                  <RadioGroupItem value="Store Visit" id="r1" />
                  <Label htmlFor="r1">Store Visit</Label>
                </div>
                <div className="space-x-2 my-2 mx-16">
                  <RadioGroupItem value="Video Call" id="r2" />
                  <Label htmlFor="r2">Video Call</Label>
                </div>
              </RadioGroup>
              <div className="flex flex-col md:flex-row my-2">
                <div className="my-2 mx-4">
                  <Select required>
                    <SelectTrigger className="w-[300px] md:w-[230px]">
                      <SelectValue placeholder="Select city*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>City</SelectLabel>
                        <SelectItem value="apple">
                          United Kingdom(UK)
                        </SelectItem>
                        <SelectItem value="banana">
                          United Kingdom(UK)
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="my-2 mx-4">
                  <Select required>
                    <SelectTrigger className="w-[300px] md:w-[230px]">
                      <SelectValue placeholder="Select store*" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Store</SelectLabel>
                        <SelectItem value="apple">Surat</SelectItem>
                        <SelectItem value="banana">Bharuch</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row my-2">
                <Input
                  type="date"
                  className="my-2 mx-4 w-[300px] md:w-[230px]"
                  required
                />
                <Input
                  type="time"
                  className="my-2 mx-4 w-[300px] md:w-[230px]"
                  required
                />
              </div>
              <Textarea
                defaultValue="Jewelry that you are looking for ?"
                className="w-[300px] md:w-[500px] my-2"
                required
              />
              <div className="flex space-x-2 my-6 justify-center md:justify-start w-full md:px-24">
                <Checkbox className="rounded-none" id="notification" />
                <label
                  htmlFor="notification"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send notifications to my phone
                </label>
              </div>
              <Button variant="destructive" className="w-[300px] md:w-[500px]">
                SUBMIT NOW
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AppointmentForm

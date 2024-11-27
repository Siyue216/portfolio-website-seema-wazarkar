import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AcademicBackground() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/50 min-h-screen " id="teaching">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Academic Background & Teaching
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="  ">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">
                    Ph.D in Computer Science & Engineering
                  </h3>
                  <p className="ml-2">| 2015 - 2018</p>
                </span>
                <h5 className="ml-3">National Institute of Technology, Goa</h5>
              </div>
              <div className="">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">
                    M.Tech in Computer Science & Technology
                  </h3>
                  <p className="ml-2">| 2012 - 2014</p>
                </span>
                <h5 className="ml-3">Shivaji University, Kolhapur</h5>
              </div>
              <div className="">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">B.E in Information Technology</h3>
                  <p className="ml-2">| 2008 - 2012</p>
                </span>
                <h5 className="ml-3">
                  D.Y. Patil College of Engineering, Kolhapur
                </h5>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Teaching Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="  ">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">Assistant Professor</h3>
                  <p className="ml-2">| September 2021 - till date</p>
                </span>
                <h5 className="ml-3">
                  Thapar Institute of Engineering and Technology, Patiala
                </h5>
              </div>
              <div className="  ">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">Assistant Professor</h3>
                  <p className="ml-2">| August 2020 to September 2021</p>
                </span>
                <h5 className="ml-3">
                  Symbiosis International University, Pune
                </h5>
              </div>
              <div className="  ">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">Assistant Professor</h3>
                  <p className="ml-2">| June 2019 to June 2020 </p>
                </span>
                <h5 className="ml-3">
                  MIT Arts, Design & Technology University, Pune
                </h5>
              </div>
              <div className="  ">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">Research Scholar</h3>
                  <p className="ml-2">| July 2015 – September 2019</p>
                </span>
                <h5 className="ml-3">National Institute of Technology, Goa</h5>
              </div>
              <div className="  ">
                <span className="flex items-center justify-start flex-wrap">
                  <h3 className=" font-bold">Assistant Professor</h3>
                  <p className="ml-2">| July 2014 to May 2015</p>
                </span>
                <h5 className="ml-3">KIT's College of Engineering, Kolhapur</h5>
              </div>
              <div className="  ">
                <span className="flex items-center justify-start">
                  <h3 className=" font-bold">Teaching Assistant</h3>
                  <p className="ml-2">| July 2012 to June 2014</p>
                </span>
                <h5 className="ml-3">Shivaji University, Kolhapur</h5>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Research() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24" id="research">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Research {"&"} Publications
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Research Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Machine Learning</li>
              <li>Computer Vision</li>
              <li>Social Media Mining</li>
              <li>Multi-modal Analysis</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              Selected Publications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Ethical Considerations in AI Decision Making, Nature, 2023
              </li>
              <li>Advancements in Natural Language Understanding, ACM, 2022</li>
              <li>Quantum Algorithms for Machine Learning, IEEE, 2021</li>
              <li>
                Deep Learning in Computer Vision: A Comprehensive Review, arXiv,
                2020
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

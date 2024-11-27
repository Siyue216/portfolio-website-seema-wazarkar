import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/50" id="projects">
      <h2 className="text-3xl font-bold mb-12 text-center">Notable Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>EthicalAI Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              An open-source framework for implementing ethical considerations
              in AI systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>TensorFlow</Badge>
              <Badge>Ethics</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>QuantumNLP</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Exploring quantum computing applications in natural language
              processing tasks.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Q#</Badge>
              <Badge>Python</Badge>
              <Badge>NLP</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AI4Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Developing AI-powered tools to enhance personalized learning
              experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Machine Learning</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

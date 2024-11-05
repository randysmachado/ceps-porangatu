import { Container } from "@/components/container";
import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Form } from "@/components/form";
import { Badge } from "@/components/badge";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <Container>
      <div className="relative overflow-hidden pt-24 before:absolute before:start-1/2 before:top-0 before:-z-[1] before:size-full before:-translate-x-1/2 before:transform before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-cover before:bg-top before:bg-no-repeat dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
        <Badge text="Você sabia que o CEP de Porangatu mudou?" />

        <Title initialText="Buscar" accentText="CEP" finalText="atualizado" />
        <Description text="Pesquise abaixo o novo CEP da sua rua" />
      </div>

      <Form />

      <Footer />
    </Container>
  );
}

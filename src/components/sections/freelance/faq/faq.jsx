import React from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const arrFAQ = [
    {
      id: 1,
      seccao: "1. Sobre os Serviços",
      perguntas: [
        {
          id: 1,
          pergunta: "1.1 Que serviços posso contratar?",
          resposta:
            "Ofereço uma ampla gama de serviços, desde a criação de websites e lojas online até a gestão de redes sociais e design gráfico. Podes encontrar a lista completa dos serviços na secção de Serviços. Se não encontrares exatamente o que procuras, entra em contacto comigo! Terei todo o gosto em entender as tuas necessidades e encontrar a melhor solução para si.",
        },
        {
          id: 2,
          pergunta:
            "1.2 Trabalhas com clientes de diferentes setores e países?",
          resposta:
            "Sim! Atendo clientes de diversos setores, tanto em Portugal quanto no estrangeiro, adaptando as soluções às necessidades específicas de cada negócio.",
        },
        {
          id: 3,
          pergunta:
            "1.3 Como posso saber qual o serviço mais adequado para mim?",
          resposta:
            "Se tiveres dúvidas sobre qual serviço escolher, basta entrares em contacto. Faço uma análise do teu projeto e apresento a melhor solução com base nas tuas necessidades e objetivos.",
        },
        {
          id: 4,
          pergunta:
            "1.4 Posso contratar apenas uma parte de um serviço, como um design sem desenvolvimento?",
          resposta:
            "Sim! Se precisares apenas do design de um website, aplicação ou redes sociais, sem o desenvolvimento, também posso ajudar.",
        },
      ],
    },
    {
      id: 2,
      seccao: "2. Contratos e Formalização",
      perguntas: [
        {
          id: 6,
          pergunta: "2.1 É necessário assinar um contrato?",
          resposta:
            "Sim! O contrato garante segurança para ambas as partes, estabelecendo prazos, valores, entregas e direitos.",
        },
        {
          id: 7,
          pergunta: "2.2 Como é feita a assinatura do contrato?",
          resposta:
            "O contrato pode ser assinado digitalmente através de plataformas como DocuSign ou HelloSign, garantindo validade jurídica e agilidade no processo.",
        },
        {
          id: 8,
          pergunta:
            "2.3 O que acontece se eu precisar cancelar o projeto depois de iniciado?",
          resposta:
            "A política de cancelamento e possíveis reembolsos estará definida no contrato. Geralmente, parte do valor pago cobre o tempo e o trabalho já investidos.",
        },
        {
          id: 9,
          pergunta: "2.4 O contrato protege a minha propriedade intelectual?",
          resposta:
            "Sim! Todo o material criado será teu, conforme acordado no contrato. Se necessário, posso incluir cláusulas de confidencialidade para proteger informações sensíveis.",
        },
      ],
    },
    {
      id: 3,
      seccao: "3. Pagamentos e Faturação",
      perguntas: [
        {
          id: 10,
          pergunta: "3.1 Quais são as formas de pagamento aceites?",
          resposta:
            "Atualmente, aceito pagamentos via Wise e PayPal, em breve, MB Way e transferência bancária também estarão dispníveis.",
        },
        {
          id: 11,
          pergunta: "3.2 Como funciona o pagamento?",
          resposta:
            "O pagamento pode ser feito de forma integral ou parcelado, conforme o que for combinado no contrato. Normalmente, um sinal inicial é necessário para dar início ao projeto.",
        },
        {
          id: 12,
          pergunta: "3.3 Trabalhas com orçamento fixo ou preço por hora?",
          resposta:
            "O valor do projeto é geralmente fechado com base nos requisitos do cliente. Em alguns casos específicos, posso trabalhar com um valor por hora.",
        },
        {
          id: 13,
          pergunta: "3.4 Emites faturas para os pagamentos?",
          resposta: "Sim! Emito faturas de acordo com a legislação em vigor.",
        },
      ],
    },
    {
      id: 4,
      seccao: "4. Processo de Trabalho",
      perguntas: [
        {
          id: 14,
          pergunta:
            "4.1 Como funciona o processo de desenvolvimento do meu projeto?",
          resposta:
            "O processo normalmente segue estas etapas: Reunião inicial – Compreensão das necessidades e expectativas Proposta e contrato – Apresentação do orçamento e prazos Desenvolvimento – Criação do design e funcionalidades, com feedback contínuo Revisões e ajustes – Possibilidade de melhorias antes da entrega Entrega e suporte – Entrega final e possível suporte pós-projeto.",
        },
        {
          id: 15,
          pergunta: "4.2 Quanto tempo demora o desenvolvimento?",
          resposta:
            "O tempo de desenvolvimento varia consoante a complexidade do projeto e os requisitos específicos. Projetos mais simples podem ser concluídos rapidamente, enquanto soluções mais avançadas, como e-commerces ou aplicações móveis, exigem um tempo maior para garantir qualidade e funcionalidade. Durante a fase inicial, irei avaliar o teu pedido e fornecer uma estimativa mais precisa do prazo de entrega.",
        },
        {
          id: 16,
          pergunta: "4.3 Como posso acompanhar o progresso do meu projeto?",
          resposta:
            "Mantenho um canal aberto de comunicação (e-mail, WhatsApp ou reuniões periódicas) para atualizar sobre o progresso e receber feedback.",
        },
        {
          id: 17,
          pergunta: "4.4 Posso solicitar alterações durante o processo?",
          resposta:
            "Sim, pequenas alterações estão incluídas. Caso sejam necessárias mudanças significativas, ajustamos o orçamento e os prazos.",
        },
        {
          id: 18,
          pergunta:
            "4.5 Se já tiver um website, podes atualizá-lo ou melhorá-lo??",
          resposta:
            "Sim! Posso otimizar, corrigir erros ou redesenhar o teu website para melhor desempenho e design atualizado.",
        },
      ],
    },
    {
      id: 5,
      seccao: "5. Suporte e Manutenção",
      perguntas: [
        {
          id: 19,
          pergunta: "5.1 O suporte está incluído após a entrega?",
          resposta:
            "Sim! Ofereço um período de suporte gratuito (normalmente entre 15 e 30 dias), dependendo do projeto.",
        },
        {
          id: 20,
          pergunta:
            "5.2 Como funciona a manutenção de websites e lojas online?",
          resposta:
            "Caso precises de atualizações, segurança ou otimizações frequentes, podemos estabelecer um plano de manutenção mensal.",
        },
        {
          id: 21,
          pergunta:
            "5.3 E se houver um problema no meu site depois da entrega?",
          resposta:
            "Caso o problema esteja dentro do período de suporte gratuito, resolvo sem custos adicionais. Para problemas fora desse período, podemos avaliar o melhor plano de manutenção.",
        },
      ],
    },
    {
      id: 6,
      seccao: "6. Segurança e Privacidade",
      perguntas: [
        {
          id: 22,
          pergunta: "6.1 O meu site será seguro?",
          resposta:
            "Sim! Implemento medidas como SSL, backups regulares e firewall para garantir a segurança dos teus dados e dos teus clientes.",
        },
        {
          id: 23,
          pergunta: "6.2 Os meus dados estão protegidos?",
          resposta:
            "Sim! Trabalho de acordo com as normas do RGPD, garantindo que todas as informações são tratadas com segurança e privacidade.",
        },
        {
          id: 24,
          pergunta: "6.3 O que acontece se o meu site for hackeado?",
          resposta:
            "Caso tenhas um plano de manutenção, tomo medidas imediatas para restaurar a segurança. Se não tiveres manutenção ativa, podemos avaliar uma solução emergencial.",
        },
      ],
    },
    {
      id: 7,
      seccao: "7. Outros Serviços e Personalizações",
      perguntas: [
        {
          id: 25,
          pergunta: "7.1 Também fazes consultoria para estratégias digitais?",
          resposta:
            "Sim! Se precisas de orientação sobre como melhorar a presença digital do teu negócio, podemos trabalhar juntos em estratégias personalizadas.",
        },
        {
          id: 26,
          pergunta:
            "7.2 Podes criar um design exclusivo para o meu site ou redes sociais?",
          resposta:
            "Sim! Todos os designs são personalizados e feitos sob medida para cada cliente.",
        },
        {
          id: 27,
          pergunta:
            "7.3 Fazes integrações com outras plataformas (ex.: pagamentos, automações, CRM)?",
          resposta:
            "Sim, posso integrar o teu site ou loja online com ferramentas externas, como gateways de pagamento, automação de marketing e CRM.",
        },
        {
          id: 28,
          pergunta:
            "7.4 Posso contratar apenas um design e pedir para outro profissional desenvolvê-lo?",
          resposta:
            "Sim, se precisas apenas do design, posso entregá-lo pronto para que outro profissional o desenvolva.",
        },
      ],
    },
  ];

  return (
    <div className="w-screen max-w-[90%] mr-auto ml-auto pt-24 pb-24">
      <p className="text-center text-2xl font-black mb-3">
        Perguntas Frequentes
      </p>
      <p className="text-center">Subtítulo para esta secção</p>
      <div>
        {arrFAQ.map((seccao) => (
          <div key={seccao.id} className="flex flex-col">
            <h3 className="text-xl font-bold pt-10 pb-2 ">{seccao.seccao}</h3>
            <div className="flex flex-col gap-6">
              {seccao.perguntas.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row lg:justify-between bg-slate-200"
                >
                  <h4 className=" basis-2/5 p-5 text-lg text-justify">
                    {item.pergunta}
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.resposta }}
                    className="text-justify basis-2/4 p-5 text-sm font-light text-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-white bg-red-600 p-6 rounded-lg">
        A sua dúvida não está entre as mais perguntadas? Envie-me a sua dúvida
        para que possa ajudar:{" "}
        <a href="mailto:lucasoriental@gmail.com" className="font-bold underline">lucasoriental@gmail.com</a>
      </p>
    </div>
  );
};

export default Faq;

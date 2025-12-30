"use client"

import React from 'react'
import Image from "next/image";
import Header from "../../components/Header";
import { Breadcrumb } from "../../components/Breadcrumb";
import {
    Animation,
    Animation2,
    Animation3,
    Animation4,
    Animation5,
    Animation6,
    Animation7,
    Animation8
} from "../../components/Animations";
import Ansiedade from "../../assets/Ansiedade.jpg";
import Depressao from "../../assets/Depressao.png";
import Card from "../../assets/Card.png";
import CausasSuicidio from "../../assets/CausasSuicidio.png";

export default function Booklet() {
    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            <Header />
            <Breadcrumb />

            <main className="max-w-4xl mx-auto px-4 py-10">
                {/* Hero/Card principal */}
                <section className="bg-gradient-to-r from-amber-100 from-10% via-lime-100 via-50% to-sky-200 to-90% text-gray-700 rounded-2xl shadow-lg overflow-hidden p-8 mb-8 border border-gray-400">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Conteúdo textual */}
                        <div className="flex-1">
                            <h2 className="text-2xl sm:text-2xl font-extrabold">Sua Jornada para o Bem-Estar Mental</h2>
                            <p className="mt-3 text-sm sm:text-base max-w-xl opacity-95">
                                Um guia prático para conscientização, busca de tratamento e apoio em saúde mental.
                            </p>
                            <p className="mt-4 text-xs opacity-90">
                                Público: pessoas que buscam se conscientizar e tratar a saúde mental
                            </p>
                        </div>

                        {/* Animação na lateral direita */}
                        <div className="md:w-80 overflow-hidden clip-path">
                            <Animation2 />
                        </div>
                    </div>
                </section>
                {/* Conteúdo em cartões pastel */}
                <article className="space-y-6">
                    {/* Sumário card */}
                    <div className="bg-sky-100 border border-gray-400 rounded-2xl p-6 shadow-sm">
                        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                            {/* Animation2 à esquerda */}
                            <div className="md:w-150 overflow-hidden clip-path">
                                <Animation />
                            </div>

                            {/* Sumário à direita */}
                            <div className="md:w-1/2">
                                <h3 className="text-xl font-semibold text-sky-800 mb-3">Sumário</h3>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-sky-700">
                                    <li>Introdução: O que é Saúde Mental e sua Importância</li>
                                    <li>Ansiedade: Compreendendo e Enfrentando</li>
                                    <li>Depressão: Reconhecendo e Buscando Ajuda</li>
                                    <li>Prevenção ao Suicídio: Salvar Vidas é Possível</li>
                                    <li>Como Buscar Ajuda e Se Ajudar</li>
                                    <li>Referências</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* Grid com cards lado a lado (em telas maiores) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-amber-50 border border-gray-400 rounded-2xl p-5 shadow-sm">
                            <h4 className="text-lg font-semibold text-amber-800">1. Introdução: O que é Saúde Mental e sua Importância
                            </h4>
                            <p className="mt-2 text-sm text-amber-700">
                                1.1 Definição de saúde mental:
                                Segundo a Organização Mundial da Saúde (OMS), saúde mental se trata do estado de bem-estar no qual o indivíduo é capaz de usar suas próprias habilidades, recuperar-se do estresse rotineiro, ser produtivo e contribuir com a sua comunidade.
                                A saúde mental é um assunto complexo, que é vivenciado de forma diferente de uma pessoa para outra. A qualquer momento, um conjunto diversificado de fatores individuais, familiares e estruturais pode combinar-se para proteger ou prejudicar a saúde mental. Embora a maioria das pessoas sejam resiliente, as pessoas expostas a circunstâncias adversas correm maior risco de desenvolver um problema de saúde mental. As condições de saúde mental incluem transtornos mentais e deficiências psicossociais, muitas condições podem ser tratadas eficazmente a um custo relativamente baixo, mas os sistemas de saúde continuam significativamente com poucos recursos e as lacunas de tratamento são grandes em todo o mundo.

                            </p>
                        </section>

                        <section className="bg-lime-50 border border-gray-400 rounded-2xl p-5 shadow-sm">
                            <h4 className="text-lg font-semibold text-lime-700">1.2 Dados sobre prevalência de transtornos mentais no Brasil: </h4>
                            <p className="mt-2 text-sm text-lime-700">
                                Quando passamos a observar o cenário da Saúde Mental no Brasil é inevitável notar o quanto ela se tornou um assunto em pauta nos últimos anos, e infelizmente não se tornou pauta por um bom motivo. Mesmo antes da pandemia, o Brasil era o país com maior prevalência de ansiedade. Segundo um estudo de 2017 da OMS, 18 milhões de brasileiros sofriam com algum tipo de distúrbio relacionado ao problema. Isso equivalia a 9,3% da população. Já a depressão afetava 12 milhões de pessoas no país, sendo a maior incidência da América Latina, e tudo indica que esses distúrbios psicológicos só se agravaram depois de 2020, afinal no novo relatório global World Mental Health Day 2024, nele foi feito um questionamento interessante : “qual o maior problema de saúde enfrentado pelas pessoas em seu país hoje?” A resposta de 54% dos brasileiros afirmaram ser a saúde mental, posicionando o Brasil como 9° colocado do mundo.

                            </p>
                        </section>
                    </div>


                    {/* Box com detalhes (Symptoms) e ilustração */}
                    <section className="bg-[#EDE4DD] border border-gray-400 rounded-2xl p-4 shadow-sm">
                        <div className="md:flex md:items-center md:gap-6">
                            {/* Lado esquerdo: textos */}
                            <div className="md:flex-1">
                                <h4 className="text-lg font-semibold text-amber-900 mb-2">
                                    2. Ansiedade: Compreendendo e Enfrentando
                                </h4>

                                <p className="mt-2 text-sm text-amber-800">
                                    <strong>2.1 O que é Ansiedade: <br /></strong>
                                    Ansiedade se define como o estado emocional complexo que envolve sentimentos de apreensão,
                                    nervosismo, preocupação e medo em relação a eventos futuros. Segundo o Relatório Mundial da
                                    Saúde Mental de 2020 da Organização Mundial da Saúde (OMS), a ansiedade é um problema de saúde
                                    mental prevalente que pode impactar significativamente o funcionamento diário das pessoas.
                                    Sendo a ansiedade um sentimento de preocupação, medo ou apreensão que é normal em situações de
                                    estresse é importante diferenciar a comum ansiedade com o Transtorno de Ansiedade, uma vez que
                                    ela é uma condição mental caracterizada por essa tal preocupação excessiva persistente e que
                                    interfere nos relacionamentos e atividades normais de quem o possui.
                                </p>


                            </div>

                            {/* Lado direito: animação */}
                            <div className="md:w-70 md:h-45 w-full p-3">
                                <Animation3 />
                            </div>
                        </div>
                    </section>


                    {/* Autocuidado e Apoio lado a lado */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-sky-100 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-sky-800">
                                <strong>2.2 Tipos de Transtornos de Ansiedade:</strong><br />
                                • Fobia Específica: Medo intenso de situações ou objetos específicos.<br />
                                • Transtorno de Ansiedade Social: Medo de situações sociais e avaliação de outras pessoas.<br />
                                • Transtorno de Pânico: Ataques de pânico involuntários com sintomas físicos intensos.<br />
                                • Transtorno de Ansiedade Generalizada (TAG): Preocupação excessiva e desproporcional.<br />
                                • Transtorno Obsessivo Compulsivo (TOC): Exageradas obsessões e compulsões.
                            </p>
                        </section>

                        <section className="bg-stone-50 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-gray-800">
                                <strong>2.3 Sintomas da Ansiedade</strong><br />
                                Físicos: respiração ofegante, batimentos cardíacos acelerados, tremores, suor excessivo, tensão muscular, náusea, cansaço, insônia
                                Psicológicos: sensação de que algo ruim vai acontecer, pensamentos negativos, medo, insegurança, preocupação exagerada, irritabilidade
                                Comportamentais: evitação de situações, comportamentos compulsivos, dificuldade de concentração
                                Cognitivos: pensamentos incessantes, preocupações, pensamentos catastróficos, autoavaliação negativa

                            </p>
                        </section>
                    </div>

                    <section className="bg-lime-50 border border-gray-400 rounded-2xl p-4 shadow-sm">
                        <div className="md:flex md:items-center md:gap-6">
                            {/* Lado esquerdo: textos */}
                            <div className="md:flex-1">
                                <p className="mt-2 text-sm text-lime-700">
                                    <strong>2.4 Como Lidar com a Ansiedade <br /></strong>
                                    • Aceitação: reconhecer a existência da ansiedade sem julgamentos.<br />
                                    • Rotinas: manter horários regulares, incluindo sono adequado<br />
                                    • Evitar exageros: excesso de álcool, drogas, compras impulsivas.<br />
                                    • Exercícios físicos: aumentam produção de serotonina e sensação de prazer.<br />
                                    • Identificar gatilhos: reconhecer padrões e situações que desencadeiam ansiedade.<br />
                                    • Técnicas de relaxamento: meditação, respiração profunda, yoga.<br />
                                    • Apoio social: conversar com amigos, familiares ou grupos de apoio.<br />
                                    • Terapia: buscar ajuda profissional, como terapia cognitivo-comportamental.<br />
                                    • Medicamentos: em casos graves, consultar um psiquiatra para avaliação.<br />
                                </p>


                            </div>

                            {/* Lado direito: animação */}
                            <div className="md:w-70 md:h-45 w-full p-3">
                                <Animation4 />
                            </div>
                        </div>
                    </section>
                    {/* Como buscar ajuda: card grande com duas colunas internas */}
                    <section className="bg-[#FFE5E4] rounded-2xl p-6 shadow-md border border-gray-400">
                        <div className="md:flex ">
                            <Image 
                                src={Ansiedade.src} 
                                alt="Imagem ilustrativa sobre saúde mental" 
                                width={600}
                                height={400}
                                className="mx-auto w-150 h-auto mt-5 mb-5" 
                            />
                        </div>
                    </section>

                    {/* Box com detalhes (Symptoms) e ilustração */}
                    <section className="bg-[#EDE4DD] border border-gray-400 rounded-2xl p-4 shadow-sm">
                        <div className="md:flex md:items-center md:gap-6">
                            {/* Lado esquerdo: textos */}
                            <div className="md:flex-1">
                                <h4 className="text-lg font-semibold text-amber-900 mb-2">
                                    3. Depressão: Reconhecendo e Buscando Ajuda
                                </h4>

                                <p className="mt-2 text-sm text-amber-800">
                                    <strong>3.1 O que é Depressão: <br /></strong>
                                    Depressão é uma doença crônica multifatorial caracterizada por tristeza prolongada, desprazer, sentimento de culpa, falta de entusiasmo nas atividades, alterações do sono (insônia ou sonolência), alteração de apetite, falta de concentração nas atividades  e até mesmo pensamentos suicidas.
                                    É importante diferenciar tristeza passageira e depressão, enquanto a tristeza é passageira e fugaz, a depressão pode ser duradoura ou recorrente, prejudicando substancialmente a capacidade de um indivíduo de funcionar no trabalho ou na escola ou enfrentar diariamente a vida. A depressão é a principal causa de incapacidade em todo o mundo e contribui de forma importante para a carga global de doenças.
                                </p>


                            </div>

                            {/* Lado direito: animação */}
                            <div className="md:w-70 md:h-45 w-full p-3">
                                <Animation5 />
                            </div>
                        </div>
                    </section>


                    {/* Autocuidado e Apoio lado a lado */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-emerald-50 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-emerald-700">
                                <strong>3.2 Sintomas da Depressão: </strong><br />
                                • Humor depressivo persistente<br />
                                • Perda de interesse ou prazer em atividades<br />
                                • Alterações de peso e apetite<br />
                                • Insônia ou hipersonia<br />
                                • Fadiga e falta de energia<br />
                                • Sentimentos de culpa e inutilidade<br />
                                • Dificuldade de concentração<br />
                                • Pensamentos de morte ou suicídio<br />



                            </p>
                        </section>

                        <section className="bg-lime-50 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-lime-700">
                                <strong>3.3 Fatores que Contribuem para Depressão</strong><br />
                                • Alta carga de estudos ou trabalho<br />
                                • Dificuldades financeiras<br />
                                • Falta de apoio familiar<br />
                                • Problemas de relacionamento<br />
                                • Traumas e perdas<br />
                                • Isolamento social<br />
                                • Uso de substâncias psicoativas<br />
                                • Condições médicas crônicas<br />

                            </p>
                        </section>
                    </div>

                    <section className="bg-sky-100 border border-gray-400 rounded-2xl p-4 shadow-sm">
                        <div className="md:flex md:items-center md:gap-6">
                            {/* Lado esquerdo: textos */}
                            <div className="md:flex-1">
                                <p className="mt-2 text-sm text-sky-800">
                                    <strong>3.4 Como Enfrentar a Depressão<br /></strong>
                                    • Buscar ajuda profissional (psicólogo, psiquiatra)<br />
                                    • Tratamento combinado: psicoterapia e, quando necessário, medicação<br />
                                    • Manter atividade física regular<br />
                                    • Estabelecer rotina de sono adequada<br />
                                    • Evitar álcool e drogas<br />
                                    • Fortalecer rede de apoio social<br />
                                    • Técnicas de relaxamento e mindfulness (focar a atenção no momento presente)


                                </p>


                            </div>

                            {/* Lado direito: animação */}
                            <div className="md:w-70  p-3">
                                <Animation6 />
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#FFC0E3] rounded-2xl p-6 shadow-md border border-gray-400">
                        <div className="md:flex ">
                            <Image 
                                src={Depressao.src} 
                                alt="Imagem ilustrativa sobre saúde mental" 
                                width={440}
                                height={300}
                                className="mx-auto w-110 h-auto mt-5 mb-5" 
                            />
                        </div>
                    </section>

                    {/* Como buscar ajuda: card grande com duas colunas internas */}
                    <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-400">
                        <h4 className="text-center text-xl font-semibold text-gray-900 mb-2">
                            Resumindo alguns sintomas comuns de <strong><span className="text-[#006DB6]">Ansiedade</span></strong> e <strong><span className="text-[#EB766E]">Depressão</span></strong>
                        </h4>
                        <div className="md:flex ">

                            <Image 
                                src={Card.src} 
                                alt="Imagem ilustrativa sobre saúde mental" 
                                width={600}
                                height={400}
                                className="mx-auto w-150 h-auto mt-5 mb-5" 
                            />
                        </div>
                    </section>

                    <section className="bg-[#F0EEF9] border border-gray-400 rounded-2xl p-4 shadow-sm">
                        <div className="md:flex md:items-center md:gap-6">
                            {/* Lado esquerdo: textos */}
                            <div className="md:flex-1">
                                <p className="mt-2 text-sm text-lime-800">
                                    <strong> 4. Prevenção ao Suicídio: Salvar Vidas é Possível <br /></strong>

                                    4.1 Dados e Conscientização:
                                    - Segundo Organização Mundial de Saúde aproximadamente 800 mil pessoas morrem por suicídio por ano no mundo: aproximadamente 1 para cada 100 mortes.
                                    - No Brasil, 42 pessoas por dia tiram a própria vida
                                    - Suicídio é a terceira maior causa de morte entre jovens de 15 a 29 anos
                                    - Segundo a OMS, 90% dos casos de suicídio podem ser prevenidos, desde que existam condições mínimas para oferta de ajuda voluntária ou profissional.


                                </p>


                            </div>

                            {/* Lado direito: animação */}
                            <div className="md:w-70  ml-20 p-3">
                                <Animation7 />
                            </div>
                        </div>
                    </section>

                    {/* Autocuidado e Apoio lado a lado */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-sky-50 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-sky-700">
                                <strong>4.2 Fatores de Risco para Suicídio: </strong><br />
                                • Tentativas anteriores de suicídio (principal fator)<br />
                                • Transtornos mentais (depressão, ansiedade, abuso de substâncias)<br />
                                • Histórico familiar de suicídio<br />
                                • Desemprego e problemas financeiros<br />
                                • Discriminação (orientação sexual, identidade de gênero, raça)<br />
                                • Agressões físicas e psicológicas<br />
                                • Conflitos familiares<br />
                                • Perda de ente querido<br />
                                • Isolamento social<br />
                                • Doenças crônicas e dolorosas<br />
                            </p>
                        </section>

                        <section className="bg-emerald-50 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-emerald-900">
                                <strong>4.3 Fatores de Proteção contra Suicídio: </strong><br />
                                • Apoio familiar e social forte<br />
                                • Acesso à saúde mental de qualidade<br />
                                • Autoestima elevada<br />
                                • Autocuidado<br />
                                • Crenças religiosas/culturais/étnicas<br />
                                • Laços sociais estabelecidos<br />
                                • Vida social e lazer ativos<br />
                                • Senso de responsabilidade com a família<br />
                                • Capacidade de solucionar problemas<br />
                                • Emprego e direitos trabalhistas<br />
                                • Educação de qualidade<br />



                            </p>
                        </section>
                    </div>

                    <section className="bg-[#FAFAF9] border border-gray-400 rounded-2xl p-4 shadow-sm">
                        <div className="md:flex md:items-center md:gap-6">
                            {/* Lado esquerdo: textos */}
                            <div className="md:flex-1">
                                <p className="mt-2 text-sm text-gray-700">
                                    <strong>4.4 Verifique os Sinais de Alerta para Comportamento Suicida <br /></strong>
                                    • Isolamento social: não atender telefonemas, reduzir interações nas redes sociais<br />
                                    • Mudança drástica de comportamento: pessoa ativa fica apática, chora mais, menos motivação<br />
                                    • Descuido com aparência pessoal<br />
                                    • Perda ou ganho inusitado de peso<br />
                                    • Mudanças no padrão de sono<br />
                                    • Irritabilidade excessiva<br />
                                    • Doação de pertences valorizados<br />
                                    • Organização de assuntos pessoais (testamento, despedidas)<br />
                                    • Automutilação<br />
                                    • Aumento do uso de álcool ou drogas<br />
                                    • Comportamentos de risco<br />
                                    • Queda no desempenho escolar ou profissional<br />
                                </p>


                            </div>

                            {/* Lado direito: animação */}
                            <div className="md:w-70 h-45 p-3">
                                <Animation8 />
                            </div>
                        </div>
                    </section>

                    <section className="bg-[#FFEABD] rounded-2xl p-6 shadow-md border border-gray-400">
                        <div className="md:flex ">
                            <Image 
                                src={CausasSuicidio.src} 
                                alt="Imagem ilustrativa sobre saúde mental" 
                                width={720}
                                height={500}
                                className="mx-auto w-180 h-auto mt-5 mb-5" 
                            />
                        </div>
                    </section>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-emerald-50 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-emerald-700">
                                <strong>5. Como Buscar Ajuda e Se Ajudar
                                    : </strong><br />
                                <strong>• 5.1 O que FAZER:</strong><br />
                                Encontre um momento apropriado em lugar calmo para conversar<br />
                                Acolha sem julgamentos, ouça com a mente aberta<br />
                                Faça a pessoa verbalizar o que sente, a dor que está sentindo<br />
                                Pergunte diretamente sobre suicídio: "Você está pensando em se matar?"<br />
                                Pergunte: "Tem algo que eu possa fazer para te ajudar?"<br />
                                Deixe o lugar mais seguro (remova meios letais)<br />
                                Incentive a procurar ajuda profissional, ofereça-se para acompanhar<br />
                                Conte a outras pessoas, busque ajuda profissional<br />
                            </p>
                        </section>

                        <section className="bg-amber-50 rounded-2xl p-5 border border-gray-400 shadow-sm">
                            <p className="mt-2 text-sm text-amber-900">
                                <strong>5. Como Buscar Ajuda e Se Ajudar : </strong><br />
                                <strong>• 5.2 O que NÃO fazer: </strong><br />
                                Ignorar a situação<br />
                                Julgar as causas da crise ou a reação da pessoa<br />
                                Minimizar o sofrimento: "Já passei por coisas piores"<br />
                                Fazer falsas promessas de ajuda<br />
                                Ficar chocado ou demonstrar pânico<br />
                                Dizer que tudo vai ficar bem e se afastar<br />
                                Condenar: "Isso é covardia", "É fraqueza"<br />
                                Dar sermões ou frases de incentivo vazias: "Levanta a cabeça"<br />
                                Deixar a pessoa sozinha se o risco for iminente<br />
                            </p>
                        </section>
                    </div>
                    {/* Como buscar ajuda: card grande com duas colunas internas */}
                    <section className="bg-blue-100 rounded-2xl p-6 shadow-md border border-gray-400">
                        <div className="md:flex md:items-start md:gap-6">
                            <div className="md:flex-1">
                                <h4 className="text-lg font-semibold">5.3 Como Buscar Ajuda e Se Ajudar
                                </h4>
                                <p className="mt-2 text-sm text-gray-700">Buscar ajuda pode parecer difícil — aqui estão passos práticos:</p>

                                <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-gray-700">
                                    <li>Linha de Apoio 24 horas:
                                        Centro de Valorização da Vida (CVV):<br></br> Telefone 188 (ligação gratuita)
                                    </li>
                                    <div>
                                        <details className="cursor-pointer group">
                                            <summary className="flex items-center justify-start">
                                                2. Recursos gratuitos no Brasil:<span className="ml-1 text-red-500 transition-transform duration-200 group-open:rotate-90">▶</span>
                                            </summary>
                                            <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                <li>CAPS (Centros de Atenção Psicossocial): serviços públicos especializados em saúde mental que oferecem atendimento integral, com equipe multidisciplinar (médicos, psicólogos, assistentes sociais, enfermeiros)
                                                </li>
                                                <li>CAPS I, II, III: para adultos com transtornos mentais graves
                                                </li>
                                                <li>CAPSi: infantil (crianças e adolescentes)
                                                </li>
                                                <li>Unidades Básicas de Saúde (UBS): porta de entrada para atendimento no SUS, oferece acolhimento e encaminhamento
                                                </li>
                                                <li>Clínicas-Escola de Universidades: atendimento gratuito ou a valores sociais oferecido por estudantes supervisionado
                                                </li>
                                            </ul>
                                        </details>
                                    </div>

                                    <div>
                                        <details className="cursor-pointer group">
                                            <summary className="flex items-center justify-start">
                                                3. Emergências: <span className="ml-1 text-red-500 transition-transform duration-200 group-open:rotate-90">▶</span>
                                            </summary>
                                            <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                <li>SAMU: 192
                                                </li>
                                                <li>Corpo de Bombeiros: 193
                                                </li>
                                                <li>Hospitais, UPA 24h, Pronto-Socorro
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                </ol>
                            </div>

                            <div className="mt-4 md:mt-0 w-full md:w-60 h-45 bg-stone-100 border border-gray-400 rounded-xl p-3 text-teal-800">
                                <p className="text-sm font-medium">Dica</p>
                                <p className="text-xs mt-2">Se puder, ofereça-se para acompanhar alguém na primeira consulta — isso reduz a ansiedade. Estar presente mostra apoio e faz a pessoa se sentir acolhida. Pequenos gestos como esse podem fazer uma grande diferença no processo de cuidar da saúde mental.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-amber-100 rounded-2xl p-6 shadow-md border border-gray-400">
                        <div className="md:flex md:items-start md:gap-6">
                            <div className="md:flex-1">
                                <h4 className="text-lg font-semibold">6. Referências:</h4>
                                <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-gray-700">

                                    <section className="bg-stone-100 rounded-2xl p-6 shadow-md border border-gray-400">
                                        <div className="md:flex md:items-start md:gap-6">
                                            <div className="md:flex-1">
                                                <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-gray-700">

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Ansiedade e Depressão no Contexto Escolar</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://flacso.org.br/files/2021/12/08.-Ansiedade-e-Depress%C3%A3o-no-Contexto-Escolar.pdf" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://flacso.org.br/files/2021/12/08.-Ansiedade-e-Depress%C3%A3o-no-Contexto-Escolar.pdf</a>. Acesso em: 16 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>CAPS: Guia Completo para Acessar Tratamento de Saúde Mental pelo SUS</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://vivaosus.com/caps" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://vivaosus.com/caps</a>. Acesso em: 19 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Cartilha de Orientação com Propostas de Intervenção para o Transtorno de Ansiedade</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://educapes.capes.gov.br/bitstream/capes/748464/2/CARTILHA%20DE%20ORIENTA%C3%87%C3%83O%20COM%20PROPOSTAS%20DE%20INTERVEN%C3%87%C3%83O%20PARA%20O%20TRANSTORNO%20DE%20ANSIEDADE.pdf" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://educapes.capes.gov.br/bitstream/capes/748464/2/CARTILHA%20DE%20ORIENTA%C3%87%C3%83O%20COM%20PROPOSTAS%20DE%20INTERVEN%C3%87%C3%83O%20PARA%20O%20TRANSTORNO%20DE%20ANSIEDADE.pdf</a>. Acesso em: 15 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Cartilha de Prevenção ao Suicídio</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.cee.ce.gov.br/wp-content/uploads/sites/49/2023/09/Cartilha-de-prevencao-ao-suicidio-1_compressed.pdf" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.cee.ce.gov.br/wp-content/uploads/sites/49/2023/09/Cartilha-de-prevencao-ao-suicidio-1_compressed.pdf</a>. Acesso em: 16 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Como Diferenciar um Quadro Depressivo de uma Tristeza Passageira?</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://telessaude.saude.ms.gov.br/como-diferenciar-um-quadro-depressivo-de-uma-tristeza-passageira/" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://telessaude.saude.ms.gov.br/como-diferenciar-um-quadro-depressivo-de-uma-tristeza-passageira/</a>. Acesso em: 16 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Como Falar de Forma Segura Sobre o Suicídio</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://vitaalere.com.br/wp-content/uploads/2019/09/425263625-Como-Falar-de-Forma-Segura-Sobre-Suicidio.pdf" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://vitaalere.com.br/wp-content/uploads/2019/09/425263625-Como-Falar-de-Forma-Segura-Sobre-Suicidio.pdf</a>. Acesso em: 18 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Cuidando da Saúde Mental</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.ee.usp.br/wp-content/uploads/2024/11/Cartilha-cuidando-saude-mental.pdf" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.ee.usp.br/wp-content/uploads/2024/11/Cartilha-cuidando-saude-mental.pdf</a>. Acesso em: 14 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Depressão: A principal causa de incapacidade no mundo</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.paho.org/pt/topicos/depressao#:~:text=A%20depress%C3%A3o%20%C3%A9%20a%20principal,a%20carga%20global%20de%20doen%C3%A7as" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.paho.org/pt/topicos/depressao#:~:text=A%20depress%C3%A3o%20%C3%A9%20a%20principal,a%20carga%20global%20de%20doen%C3%A7as</a>. Acesso em: 16 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Do Diagnóstico à Intervenção: Gerenciando Ansiedade e Depressão em Jovens</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://bjihs.emnuvens.com.br/bjihs/article/view/3690" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://bjihs.emnuvens.com.br/bjihs/article/view/3690</a>. Acesso em: 16 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Onde Pedir Ajuda?</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://blog.vitaalere.com.br/onde-pedir-ajuda-%E2%9D%93/" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://blog.vitaalere.com.br/onde-pedir-ajuda-%E2%9D%93/</a>. Acesso em: 19 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Prevenção do Suicídio</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://setembroamarelo.org.br/prevencao/" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://setembroamarelo.org.br/prevencao/</a>. Acesso em: 17 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Prevenção do Suicídio: Um Manual para Profissionais da Saúde</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.saude.df.gov.br/documents/37101/0/OMS-Manual-de-preven%C3%A7%C3%A3o-do-suic%C3%ADdio-para-aten%C3%A7%C3%A3o-prim%C3%A1ria.pdf/1801d5ef-80f0-ee5d-da6a-3fadc27737f9?t=1758127239332" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.saude.df.gov.br/documents/37101/0/OMS-Manual-de-preven%C3%A7%C3%A3o-do-suic%C3%ADdio-para-aten%C3%A7%C3%A3o-prim%C3%A1ria.pdf/1801d5ef-80f0-ee5d-da6a-3fadc27737f9?t=1758127239332</a>. Acesso em: 18 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Quais São os Sinais de Alarme para Suicídio?</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://prevenirsuicidio.pt/quais-sao-os-sinais-de-alarme-para-suicidio/" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://prevenirsuicidio.pt/quais-sao-os-sinais-de-alarme-para-suicidio/</a>. Acesso em: 18 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Saúde Mental no Brasil: dados e panorama</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://ipqhc.org.br/2024/04/15/saude-mental-no-brasil-dados-e-panorama/" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://ipqhc.org.br/2024/04/15/saude-mental-no-brasil-dados-e-panorama/</a>. Acesso em: 14 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Saúde Mental: fortalecendo nossa resposta</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response</a>. Acesso em: 14 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Setembro Amarelo: Onde Buscar Ajuda</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://prefeitura.sp.gov.br/web/saude/w/noticias/318737" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://prefeitura.sp.gov.br/web/saude/w/noticias/318737</a>. Acesso em: 19 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Significados, Motivações e Sinais do Comportamento Suicida na Adolescência</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://ojs.unifor.br/rmes/article/view/13309" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://ojs.unifor.br/rmes/article/view/13309</a>. Acesso em: 17 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Sinais de Alerta de Suicídio na Adolescência</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://hospitalsantamonica.com.br/sinais-de-alerta-de-suicidio-na-adolescencia/" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://hospitalsantamonica.com.br/sinais-de-alerta-de-suicidio-na-adolescencia/</a>. Acesso em: 18 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Sinais de Alerta em Relação ao Risco de Suicídio em Adolescentes</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.ifpb.edu.br/princesaisabel/institucional/naps/materiais-do-setor-de-saude/sinais-de-alerta-em-relacao-a-risco-de-suicidio-em-adolescentes.pdf" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.ifpb.edu.br/princesaisabel/institucional/naps/materiais-do-setor-de-saude/sinais-de-alerta-em-relacao-a-risco-de-suicidio-em-adolescentes.pdf</a>. Acesso em: 18 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Suicídio: Fatos e Números</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.who.int/news-room/fact-sheets/detail/suicide" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.who.int/news-room/fact-sheets/detail/suicide</a>. Acesso em: 17 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>Suicídio: Prevenção</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio-prevencao" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/suicidio-prevencao</a>. Acesso em: 18 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>World Mental Health Day 2024</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://www.ipsos.com/pt-br/world-mental-health-day-2024#:~:text=Apenas%2018%25%20citavam%20a%20sa%C3%BAde,em%202024%2C%20com%2054%25" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://www.ipsos.com/pt-br/world-mental-health-day-2024#:~:text=Apenas%2018%25%20citavam%20a%20sa%C3%BAde,em%202024%2C%20com%2054%25</a>. Acesso em: 15 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                    <details className="cursor-pointer mt-2">
                                                        <summary>World Mental Health Report</summary>
                                                        <ul className="mt-2 ml-5 list-disc text-sky-800 text-sm">
                                                            <li>
                                                                Disponível em: <a href="https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content" target="_blank" rel="noopener noreferrer" className="break-all hover:underline">https://iris.who.int/server/api/core/bitstreams/40e5a13a-fe50-4efa-b56d-6e8cf00d5bfa/content</a>. Acesso em: 16 out. 2025.
                                                            </li>
                                                        </ul>
                                                    </details>

                                                </ol>
                                            </div>
                                        </div>
                                    </section>



                                </ol>
                            </div>
                        </div>
                    </section>


                    {/* Rodapé local */}
                    <footer className="text-xs text-gray-500 pt-4">
                        <p>Esta cartilha foi elaborada para orientação e conscientização. Não substitui avaliação médica ou psicológica.</p>
                        <p className="mt-1">Mente Aberta — informações para promover cuidado e acolhimento.</p>
                    </footer>
                </article>
            </main>
        </div>
    );
}

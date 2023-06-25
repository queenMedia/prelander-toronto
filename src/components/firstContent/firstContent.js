import Banner from "../../assets/images/banner-first-content.jpg";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img3.jpg";
import Img5 from "../../assets/images/img5.jpg";
import Img6 from "../../assets/images/img6.gif";
import Img7 from "../../assets/images/img7.jpg";
import Img8 from "../../assets/images/img8.jpg";
import Img9 from "../../assets/images/img9.svg";
import cheque from "../../assets/images/cheque.jpg";
import Img11 from "../../assets/images/img10.png";
import ImgTransactions from "../../assets/images/img2SideFormule.png";
import BC from "../../assets/images/formule_francaise_bill.jpg";
import { useState } from "react";
import { TelegramRedirect } from "../telegramRedirect/telegramRedirect";

import "./firstContent.css";
import "./firstContent.responsive.css";

export const FirstContent = ({config}) => {
  const [displayReadMore, setDisplayReadMore] = useState(true);
  return (
    <article className="first_content">
      <h1 className="first_content_title">
        <TelegramRedirect className="first_content_title_link">
          <u>INFORME ESPECIAL:</u> Últimos Investimentos de {config.CHARACTER} deixam
          Experts Boquiabertos e Grandes Bancos Assustados
        </TelegramRedirect>
      </h1>
      <p>
        <em className="first_content_em">
          Cidadãos Português estão coletando milhões de Euros de usando essa
          “brecha de riqueza” – mas isso é legal?
        </em>
      </p>
      <TelegramRedirect>
        <img src={Banner} alt="banner" className="image_responsive" />
      </TelegramRedirect>
      <TelegramRedirect>
        <img src={Img1} alt="Img1" className="image_responsive" />
      </TelegramRedirect>
      <p className="text_image_below">
        {config.CHARACTER} aparece com novo investimento secreto que está deixando
        centenas de pessoas muito ricas no Portugal
      </p>
      <p className="text_general_content">
       {config.FIRST_PARAGRAPH}
      </p>
      <p className="text_general_content">
        Semana passada, ele apareceu na O Programa da Cristina e anunciou uma
        nova “brecha de riqueza” que ele diz que pode
        <b> transformar qualquer um em um milionário em 3-4 meses.</b>
        {config.CHARACTER_FIRSTNAME} estimula que todos os Português entrem nessa incrível oportunidade
        antes que grandes bancos acabem com isso de uma vez por todas.
      </p>
      <p className="text_general_content">
        E minutos depois de sua entrevista, o Banco de Portugal pediu para que a
        entrevista com o {config.CHARACTER_FIRSTNAME} não fosse ao ar – mas já era tarde demais.
      </p>
      <p className="text_general_content">
        <b>Aqui está o que aconteceu:</b>
      </p>
      <p className="text_general_content">
        Cristina Ferreira, apresentadora da O Programa da Cristina, convidou
        {config.CHARACTER_FIRSTNAME} ao show para que ele compartilhasse dicas de como construir riqueza
        e o empreendedor soltou a bomba:
      </p>
      <p className="text_general_content">
        <em>
          “O que me trouxe sucesso foi ter pulado em novas oportunidades
          rapidamente – sem nenhuma hesitação. E agora, minha maneira número um
          de se fazer dinheiro é um novo
          <b> programa que negocia criptomoedas automaticamente chamado </b>
          <TelegramRedirect className="general_links general_links_bold">
            {" "}
            {config.OFFER_NAME}
          </TelegramRedirect>
          . É a melhor oportunidade que já vi em toda minha vida que pode
          construir fortunas de maneira rápida. Espero que todos olhem isso
          antes que os bancos terminem com isso.”
        </em>{" "}
      </p>
      <p className="text_general_content">
        Cristina Ferreira ficou chocada quando {config.CHARACTER_FIRSTNAME} puxou seu telefone e mostrou
        ao telespectadores quanto dinheiro ele estava fazendo através desse
        programa gerador de dinheiro que todos no Portugal estavam cochichando.
      </p>
      <div className="image_group">
        <TelegramRedirect>
          <img src={Img2} alt="Img2" className="image_responsive" />
        </TelegramRedirect>
      </div>
      <p className="text_general_content">
        O segmento ficou sem tempo antes que {config.CHARACTER_FIRSTNAME} pudesse elaborar mais, então
        conseguimos uma entrevista com o próprio para aprender mais sobre essa
        oportunidade controversa.
      </p>
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2">
          ENTREVISTA EXCLUSIVA COM {config.CHARACTER.toUpperCase()}
        </TelegramRedirect>
      </h2>
      <p className="text_general_content">
        <em>
          “Você já deve ter ouvido sobre a{" "}
          <b>
            {" "}
            nova The {config.OFFER_NAME} de investimentos em criptomoedas chamada{" "}
          </b>
          <TelegramRedirect className="general_links general_links_bold">
            {" "}
            {config.OFFER_NAME}{" "}
          </TelegramRedirect>{" "}
          que está ajudando pessoas normais na Europa, Austrália, Ásia e América
          a construírem fortunas de um dia para outro. Você pode estar cético
          porque parece bom demais para ser verdade.”
        </em>
      </p>
      <p className="text_general_content">{config.CHARACTER} continua:</p>
      <p className="text_general_content">
        <em>
          “Eu entendo, já que pensava a mesma coisa quando um amigo meu de
          confiança me contou. Mas depois de ver com meus próprios olhos o
          quanto ele estava ganhando, eu tinha de tentar eu mesmo.”
        </em>
      </p>
      <p className="text_general_content">
        <em>
          “Estou contente por ter experimentado porque foi o dinheiro mais fácil
          e rápido que já fiz. Estou falando sobre
          <b> dezenas de milhares de euros em um dia no piloto automático.</b> É
          literalmente a maneira mais rápida de se conseguir uma montanha de
          dinheiro agora. E isso não vai durar mais muito tempo na medida que
          mais e mais pessoas souberem sobre isso. Ou quando os bancos decidirem
          desligar o esquema.”
        </em>
      </p>
      <img src={Img3} alt="Img3" className="image_responsive" />
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2 title_blue">
          O QUE É A THE {config.OFFER_NAME.toUpperCase()} EXATAMENTE E COMO ELA
          FUNCIONA?
        </TelegramRedirect>
      </h2>
      <p className="text_general_content">
        <b>
          A ideia por trás da{" "}
          <TelegramRedirect className="general_links general_links_bold">
            {config.OFFER_NAME}
          </TelegramRedirect>{" "}
          é bem direta:
        </b>{" "}
        Permitir com que a pessoa comum consiga dinheiro no boom das
        criptomoedas que ainda é o investimento mais lucrativo do século 21,
        apesar do que a maioria das pessoas acha.
      </p>
      <p className="text_general_content">
        Mesmo que o Bitcoin tenha caído do seu pico de $20,000 por Bitcoin,
        traders ainda estão lucrando muito. Por quê? Porque existem milhares de
        outras criptomoedas além do Bitcoin que estão sendo negociadas por
        grandes lucros diariamente.
      </p>
      <p className="text_general_content">
        Algumas dessas criptomoedas são Ripple, Ethereum, Monero, Zcash e elas
        ainda estão dando lucros de mais de 100% ou mais para pessoas comuns no
        Portugal.
      </p>
      <p className="text_general_content">
        <b>A </b>
        <TelegramRedirect className="general_links general_links_bold">
          {config.OFFER_NAME}
        </TelegramRedirect>{" "}
        te permite lucrar de todas essas criptomoedas, mesmo em um mercado em
        queda. Ela usa Inteligência Artificial (IA) para lidar automaticamente
        com vendas cobertas e descobertas para que você consiga ganhar dinheiro
        sem parar, mesmo enquanto dorme.
      </p>

      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2">
          <b>
            O SEGREDO DE SE FAZER DINHEIRO QUE GRANDES BANCOS NÃO QUEREM QUE
            VOCÊ CONHEÇA
          </b>
        </TelegramRedirect>
      </h2>
      <p>{config.CHARACTER} continua,</p>
      <p className="text_general_content">
        <em>
          “Estamos passando por tempos econômicos difíceis, e essa é a solução
          que as pessoas estavam esperando. Nunca na história tivemos uma
          <b> oportunidade tão incrível </b>
          da qual pessoas comuns possam tirar vantagem para
          <b> gerar grandes fortunas em um espaço tão pequeno de tempo.</b>
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Algumas pessoas estão hesitando entrar nessa oportunidade por ser
          muito diferente. E é por isso que
          <b> grandes bancos estão tentando disfarçar! </b>
          Os grandes bancos estão ativamente criando propagandas e chamando
          criptomoedas e The {config.OFFER_NAME} como a
          <TelegramRedirect className="general_links general_links_bold">
            {config.OFFER_NAME}
          </TelegramRedirect>{" "}
          de golpe. Por quê? Eles estão preocupados que seus grandes lucros
          encolham uma vez que seus clientes souberem como criar riqueza eles
          mesmos.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          A verdade é, criptomoedas são a revolução de nossas vidas e qualquer
          um que não entrar nessa oportunidade está perdendo
          <b>
            {" "}
            Eu já recebi ligações nervosas e ameaças de grandes corporações
            financeiras{" "}
          </b>{" "}
          porque eu estou trazendo essa tecnologia ao conhecimento das pessoas.
          Mas elas que se danem. Pessoas no Portugal já começaram a entender a
          verdade e é apenas uma questão de tempo antes que mais entendam
          também.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Estou compartilhando isso porque também recebi centenas de e-mails de
          pessoas me agradecendo por compartilhas esse segredo. O meu favorito é
          desse{" "}
          <b>
            {" "}
            Eu já recebi ligações nervosas e ameaças de grandes corporações
            financeiras{" "}
          </b>{" "}
          porque eu estou trazendo essa tecnologia ao conhecimento das pessoas.
          Mas elas que se danem. Pessoas no Portugal já começaram a entender a
          verdade e é apenas uma questão de tempo antes que mais entendam
          também.
          <b> jovem que comprou o carro dos sonhos ao seu irmão mais novo </b>–
          uma Ferrari 488 Pista usando o dinheiro que fez com a
          <TelegramRedirect className="general_links general_links_bold">
            {" "}
            {config.OFFER_NAME}
          </TelegramRedirect>{" "}
          Essa
          <TelegramRedirect className=" "> {config.OFFER_NAME}</TelegramRedirect>{" "}
          realmente está transformando as vidas de todos no mundo um pouco
          melhor.”
        </em>
      </p>
      <p>
        <TelegramRedirect>
          <img src={Img5} alt="" className="image_responsive" />
        </TelegramRedirect>
      </p>
      <p className="text_image_below">
        Rodrigo Lopes usou os lucros que ganhou da{" "}
        <TelegramRedirect className="general_links general_links_bold">
          {" "}
          {config.OFFER_NAME}
        </TelegramRedirect>{" "}
        para comprar o carro dos sonhos de seu irmãozinho. Que maneira
        inspiradora de se usar sua riqueza!
      </p>
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2 title_blue">
          A THE {config.OFFER_NAME.toUpperCase()} REALMENTE FUNCIONA? NÓS TESTAMOS NÓS
          MESMOS
        </TelegramRedirect>
      </h2>
      <p className="text_general_content">
        Nossos editores mais sêniores não nos deixariam publicar a entrevista
        com {config.CHARACTER_FIRSTNAME} {config.CHARACTER_FIRSTNAME} até que tivesse verificado que a
        <TelegramRedirect className="general_links general_links_bold">
          {" "}
          {config.OFFER_NAME}
        </TelegramRedirect>{" "}
        é uma oportunidade legítima de se fazer dinheiro. Nossa liderança
        corporativa não queria que lançássemos qualquer informação que pudesse
        potencialmente causar com que cidadãos Português perdessem seu dinheiro
        suado.
      </p>
      <p className="text_general_content">
        Então nosso time editorial testou{" "}
        <TelegramRedirect className="general_links general_links_bold">
          {" "}
          {config.OFFER_NAME}
        </TelegramRedirect>{" "}
        para ter certeza de que realmente funcionasse como o {config.CHARACTER_FIRSTNAME} descreveu. Um
        de nossos editores online, Gustavo Galvota, se voluntariou para arriscar
        seu próprio dinheiro e testar a{" "}
        <TelegramRedirect className="general_links general_links_bold">
          {" "}
          {config.OFFER_NAME}
        </TelegramRedirect>{" "}
      </p>
      <p className="text_general_content">
        Gustavo tem 47 anos e é pai de 2 filhos. Sua esposa perdeu seu trabalho
        ano passado devido à uma doença. Ele admitiu que estava sofrendo
        financeiramente e essa oportunidade de investimento poderia ser a
        resposta.
      </p>
      <p className="text_general_content">
        <TelegramRedirect>
          <img src={Img6} alt="" className="image_responsive" />
        </TelegramRedirect>
      </p>
      <p className="text_image_below">
        A família de Gustavo estava sofrendo para conseguir ajustar as contas e
        esperava que a{" "}
        <TelegramRedirect className="general_links general_links_bold">
          {" "}
          {config.OFFER_NAME}
        </TelegramRedirect>{" "}
        pudesse aliviar sua pressão financeira, então decidiu testar o sistema e
        relatar os resultados
      </p>
      <p className="text_general_content">
        <b>Gustavo relata:</b>
      </p>
      <p className="text_general_content">
        <em>
          “A primeira vez que ouvi a entrevista com {config.CHARACTER_FIRSTNAME}, achava que ele
          estivesse brincando. Fazer dinheiro de casa é apenas um sonho. Eu
          decidi tentar de qualquer forma dado minhas circunstâncias financeiras
          – e para o bem do bom jornalismo.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Eu assiti um vídeo
          <b> introdutório sobre a The {config.OFFER_NAME} </b>
          quando eu me cadastrei. O vídeo parecia estar prometendo demais, mas
          deixei meu ceticismo de lado. Em algumas horas, recebi uma ligação do
          meu investidor pessoal. Ele respondeu todas as minhas perguntas e
          tirou todas minhas dúvidas, e me garantiu que eu ganharia dinheiro.
          Ponto.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Meu investidor pessoal até me prometeu{" "}
          <b> que se eu perdesse dinheiro </b>, ele me daria um reembolso dos
          meus €300. Isso mostra o quão confiante ele estava de que isso mudaria
          minha vida. Isso sim é um bom serviço ao cliente. Não me surpreende os
          bancos estarem com medo.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Uma vez que recebi acesso à The {config.OFFER_NAME}, depositei meu
          investimento inicial de €300. Isso é o quanto minha família gastava em
          comida porcaria, então paramos de ir em fast food por um mês. Agora
          podemos ser saudáveis, e quem sabe ricos também.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          O sistema da{" "}
          <TelegramRedirect className="general_links general_links_bold">
            {" "}
            {config.OFFER_NAME}
          </TelegramRedirect>{" "}
          é uma The {config.OFFER_NAME} de negociação automática em criptomoedas. O
          software usa algoritmos avançados de AI e Machine Learning para prever
          exatamente quando uma criptomoeda vai subir ou descer. Daí ela vai
          automaticamente comprar e vender para você a todo momento. A
          tecnologia já tornou nossas vidas mais fácil, então por que não usar
          para ganhar dinheiro também?”{" "}
        </em>
      </p>
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2">
          RESULTADOS EM TEMPO REAL DE GUSTAVO COM O SISTEMA
        </TelegramRedirect>
      </h2>
      <p className="text_general_content">
        <em>
          “Depois de apenas 1 hora de ter depositado os €300, o software começou
          a tradar para mim. Para ser honesto, eu estava nervoso de que ele
          perderia todo meu dinheiro. E claro, meu primeiro trade foi uma perda
          de €63!
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Eu senti minha garganta fechando. Achei que tivesse sido enganado. Eu
          estava até mesmo pronto para ligar para meu investidor pessoal e pedir
          meu dinheiro de volta. Então me lembrei do que ele disse:{" "}
          <b> O algoritmo está certo 80-89% das vezes </b>. Você não vai ganhar
          TODA vez, mas você vai ganhar o suficiente e lucrar no geral.{" "}
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Então eu deixei o software continuar a tradar e fiquei de olho.{" "}
          <b> O próximo trade teve lucro! </b> Apenas €46, mas ainda era algo.
          Então depois <b> lucro </b> de €139. Depois mais €59, com um total de
          lucro de €244. E tudo isso em menos de 5 minutos!
        </em>{" "}
      </p>
      <p className="text_general_content">
        <em>
          Eu logo comecei a ganhar dinheiro sem parar e eu não conseguia
          acreditar nos meus olhos. Cada vez que eu atualizava a tela, os lucros
          eram maiores e maiores. Eu achei que estava usando drogas porque isso
          era bem excitante.
        </em>{" "}
      </p>

      <TelegramRedirect>
        <img src={cheque} className="image_responsive" alt="" />
      </TelegramRedirect>
      <p></p>
      <center>
        <i>
          Gustavo recebeu um cheque de <b> Gustavo recebeu um cheque de </b>{" "}
          pela primeira semana usando a
          <TelegramRedirect className="general_links ">
            {" "}
            {config.OFFER_NAME}{" "}
          </TelegramRedirect>
        </i>
      </center>
      <p className="text_general_content">
        <strong>Gustavo continua: </strong>
      </p>

      <p className="text_general_content">
        <em>
          “Agora eu estou consistentemente fazendo €700 a €1,500 por dia graças
          à
          <TelegramRedirect className="general_links ">
            {" "}
            {config.OFFER_NAME}
            {". "}
          </TelegramRedirect>
          Agora, o dinheiro é depositado na conta do meu banco a cada poucos
          dias. Apenas alguns cliques e eu recebo o dinheiro em 24-48 horas.
          Toda vez que a transferência cai em minha conta, eu tenho de me
          beliscar para ter certeza de que não estou sonhando.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Por sorte, EU AMO meu trabalho aqui porque eu trago pessoas
          importantes para notícias (como essa) ou eu já teria saído faz tempo.
          Eu fiz, no entanto, um plano de viagens para minha família para Bali
          Indonésia para celebrar quitar minhas dívidas e finalmente conseguir
          ajeitar a situação financeira da minha família!
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Ko sem prejel dostop do platforme, vplačal svojo začetno investicijo
          €300. Ta količina je toliko, koliko moja družina mesečno porabi na
          hitri hrani, zato sem se odločil, da bomo prenehali obiskovati hitro
          hrano za en mesec. Sedaj smo lahko zdravi in imamo možnost, da
          obogatimo.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          TIsso não teria sido possível sem a generosidade do Sr. {config.CHARACTER_FIRSTNAME} por
          compartilhar seu segredo ao vivo na televisão. E estou feliz de ter
          arriscado dinheiro na
          <TelegramRedirect className="general_links ">
            {" "}
            {config.OFFER_NAME}
            {". "}
          </TelegramRedirect>
          Minha esposa está mais feliz do que nunca e minhas filhas cheias de
          brinquedos.
        </em>
      </p>
      <p className="text_general_content">
        <em>
          Meus colegas de trabalho estão se batendo por não terem entrado duas
          semanas antes como eu fiz. Mas eventualmente todo o escritório se
          cadastrou (incluindo meu chefe) e eles estão me chamando de herói.”
        </em>
      </p>
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2 title_blue">
          COMO COMEÇAR COM A THE {config.OFFER_NAME} (LUGARES LIMITADOS DISPONÍVEIS)
        </TelegramRedirect>
      </h2>
      <p className="text_general_content">
        Para começar, você apenas precisa do seu computador, smartphone ou
        tablet com acesso à internet. Você não precisa de nenhuma habilidade
        específica além de saber como usar um computador e usar a internet. Você
        não precisa de nenhuma experiência tecnológica nem em criptomoedas
        porque o software e seu investidor pessoal te garantem lucro.
      </p>
      <p className="text_general_content">
        Outro benefício desse programa é que você começa quando quiser. Você
        pode ter sua própria agenda seja ela 5 horas por semana ou 50 horas por
        semana. Apenas inicie o software de negociação automática quando quiser,
        e pause quando quiser (Eu não sei por que você faria isso, mas...).
      </p>
      <p className="text_general_content">
        Para economizar o tempo do nosso leitor e verificar as funcionalidades,
        criamos um guia de como começar.
      </p>
      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2">
          AQUI ESTÁ MEU GUIA PASSO A PASSO:
        </TelegramRedirect>
      </h2>

      <p className="text_general_content">
        A primeira coisa que você vê é um vídeo mostrando o poder da
        <TelegramRedirect className="general_links ">
          {" "}
          {config.OFFER_NAME}
          {". "}
        </TelegramRedirect>
        A propaganda é grande e direta ao ponto, mas é um produto Americano e é
        assim que eles fazem as coisas. De qualquer forma,
        <b> você simplesmente coloca seu nome e endereço de e-mail </b> próximo
        ao vídeo para começar na hora.
      </p>
      <p className="text_general_content">
        <em>
          <b>(Dica: </b> Mesmo que você não decida investir dinheiro, eu te
          recomendo <b> cadastrar agora </b>
          porque é gratuito e cadastros para residentes Português podem acabar
          em qualquer momento)
          <TelegramRedirect className="general_links ">
            {" "}
            {config.OFFER_NAME}
            {". "}
          </TelegramRedirect>
        </em>
      </p>

      <h2 className="first_content_title steps_title">
        Passo 1:{" "}
        <TelegramRedirect className="">
          Insira Os Seus Detalhes E Abra Uma Conta Gratuita
        </TelegramRedirect>
      </h2>
      <p>
        <TelegramRedirect>
          <img src={Img7} alt="" className="image_responsive" />
        </TelegramRedirect>
      </p>
      <p className="text_general_content">
        Depois, você precisa colocar <b> dinheiro em sua conta </b>. Quando eu
        estava navegando pela página de depósitos, meu celular tocou. Era um
        número internacional então eu hesitei aceitar mas depois percebi de quem
        era.
      </p>

      <h2 className="first_content_title steps_title">
        Passo 2:{" "}
        <TelegramRedirect className="">
          Deposite O Investimento Mínimo Inicial de €250
        </TelegramRedirect>
      </h2>
      <p>
        <TelegramRedirect>
          <img src={Img8} alt="" className="image_responsive" />
        </TelegramRedirect>
      </p>
      <h2 className="first_content_title steps_title">
        Passo 3:{" "}
        <TelegramRedirect className="">
          Levante O Seu Lucro (o mantenha a investir para ganhar mais!)
        </TelegramRedirect>
      </h2>
      <p>
        <TelegramRedirect>
          <img
            src={Img9}
            alt=""
            className="image_responsive"
            style={{ border: "1px solid grey" }}
          />
        </TelegramRedirect>
      </p>
      <p className="text_general_content">
        Sem dúvidas, era meu gerente pessoal de conta. Seu serviço foi
        sensacional. Ele me encaminhou por todo o processo de depósito. Eles
        aceitam todos os cartões de crédito principais como Visa e MasterCard.
        Eu fui e depositei a quantia mínima que era de €250.{" "}
      </p>
      <p className="text_general_content">
        Uma vez com fundos, naveguei até a aba “Auto Trader” no software,
        coloquei a quantidade para os €250 recomendados e habilitei. O software
        começou a fazer trades à uma taxa rápida e eu estava preocupado no
        começo, mas deixei ele sozinho.
      </p>
      <p className="text_general_content">
        <em>
          “Todos querem ser ricos, mas ninguém sabe como. Bem,
          <TelegramRedirect className="general_links ">
            {" "}
            {config.OFFER_NAME}
            {". "}
          </TelegramRedirect>
          é a oportunidade de uma vida para você ficar rico está aqui. Ela NÃO
          vai ficar aqui por muito tempo, então não perca.” – <b> {config.CHARACTER} </b>
        </em>
      </p>

      <h2 className="first_content_title">
        <TelegramRedirect className="first_content_title_link_h2">
          ATUALIZAÇÃO
        </TelegramRedirect>
      </h2>

      <p className="text_general_content">
        Acabamos de receber notícias que hoje quase todas as vagas já foram
        preenchidas para cidadãos Português.
        <TelegramRedirect className="general_links ">
          {" "}
          {config.OFFER_NAME}
          {". "}
        </TelegramRedirect>
        aceita apenas uma quantidade limitada de usuários para que os lucros se
        mantenham sempre altos. Agora, temos apenas (37) vagas abertas, então se
        apresse e se cadastre agora para garantir seu lugar{" "}
        <b> se cadastre agora para garantir seu lugar. </b>{" "}
      </p>
    </article>
  );
};

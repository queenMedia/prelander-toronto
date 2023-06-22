import { OFFER_NAME, LINK } from "../../config"
import img1 from "../../assets/images/testimonials/1.jpg"
import img2 from "../../assets/images/testimonials/2.jpg"
import img3 from "../../assets/images/testimonials/3.jpg"
import img4 from "../../assets/images/testimonials/4.jpg"
import img5 from "../../assets/images/testimonials/5.jpg"
import img6 from "../../assets/images/testimonials/6.jpg"
import img7 from "../../assets/images/testimonials/7.jpg"

const linkHTML = `<a href="${LINK}">${OFFER_NAME}</a>`;

export const testimonialsData = [
    {
        title: "LUCRO: €14,551", 
        description: `"Estive usando a ${linkHTML} por 2 semanas, eu já consegui transformar meu depósito inicial de €300 para €14,851. Isso é muito mais do que ganho no trabalho."`,
        img: img1,
        name_1: "Stefano Silvestre",
        name_2: "Lisbon",
    },
    {
        title: "LUCRO: €24,553", 
        description: `"Já atingi mais de €20,000 de lucro usando a ${linkHTML}. Porque eu consigo usar em meu laptop, eu estive viajando pelo Portugal e ganhando dinheiro todo esse tempo!”`,
        img: img2,
        name_1: "Bruno Castro",
        name_2: "Porto",
    },
    {
        title: "LUCRO: €59,634", 
        description: `"É muito fácil de se usar, até mesmo para mim! Eu nunca tradei antes, mas estou fazendo €15,000 por semana e adorando!"`,
        img: img3,
        name_1: "Cintia Monteiro",
        name_2: "Amadora",
    },
    {
        title: "LUCRO: €112,197", 
        description: `"Eu finalmente consegue sair do meu trabalho, graças à ${linkHTML}. Eu fiz tanto dinheiro, é muito fácil!"`,
        img: img4,
        name_1: "Caio Gomes",
        name_2: "Braga",
    },
    {
        title: "LUCRO: € 20,151", 
        description: `"Eu apenas usei a ${linkHTML} por 2 semanas e já paguei minha viagem para a Bali."`,
        img: img5,
        name_1: "Marcela Cassanti",
        name_2: "Setúbal",
    },
    {
        title: "LUCRO: €157,136", 
        description: `"Eu me juntei com meus melhores amigos e juntos atingimos o jackpot depois de apenas 3 semanas. O robô de trading faz todo o trabalho para você. Junto fizemos mais de €33,000 por semana.”`,
        img: img6,
        name_1: "Henrique Pascoale",
        name_2: "Coimbra",
    },
    {
        title: "LUCRO: €32,872", 
        description: `"Meu namorado me contou sobre a ${linkHTML} e ela mudou minha vida. Estive fazendo €6,000 por semana por mais de um mês, com menos de 30 minutos por dia de trabalho por dia.”`,
        img: img7,
        name_1: "Lúcia Ferrante",
        name_2: "Queluz",
    }
];
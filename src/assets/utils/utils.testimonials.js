import { OFFER_NAME, LINK } from "../../config"
import img1 from "../../assets/images/testimonials/1.png"
import img2 from "../../assets/images/testimonials/2.png"
import img3 from "../../assets/images/testimonials/3.png"
import img4 from "../../assets/images/testimonials/4.png"
import img5 from "../../assets/images/testimonials/5.png"
import img6 from "../../assets/images/testimonials/6.png"

const linkHTML = `<a href="${LINK}">${OFFER_NAME}</a>`;

export const testimonialsData = [
    {
        title: "PRIHODKI: €5,552", 
        description: `"Uporabljam ${linkHTML} že nekaj več kot 2 tedna, svoje začetno vplačilo sem povzpel iz €300 na €5,852. To je veliko več kot zaslužim v službi."`,
        img: img1,
        name_1: "Tadej Novak",
        name_2: "Ljubljana",
    },
    {
        title: "PRIHODKI: €9,289", 
        description: `"Dosegel sem preko €9,200 v dohodkih po samo enem mesecu uporabe ${linkHTML}. Ker lahko to uporabljam na svojem prenosniku, sem potoval po Sloveniji in ves čas služil denar!"`,
        img: img2,
        name_1: "Matjaž Horvat",
        name_2: "Maribor",
    },
    {
        title: "PRIHODKI: €22,219", 
        description: `"To je tako presneto preprosto uporabljati, tudi zame! Nikoli še nisem trgovala, ampak služim €3,000+ tedensko in uživam življenje!"`,
        img: img3,
        name_1: "Lara Kovačič",
        name_2: "Celje",
    },
    {
        title: "PRIHODKI: €41,943", 
        description: `"Lahko sem končno dal odpoved, zahvaljujoč izključno ${linkHTML}. Toliko sem zaslužil, tako enostavno!"`,
        img: img4,
        name_1: "Jan Krajnc",
        name_2: "Kranj",
    },
    {
        title: "PRIHODKI: €7,521", 
        description: `"Uporabljam ${linkHTML} samo 2 tedna in je že plačal za moje prihodnje evropske počitnice."`,
        img: img5,
        name_1: "Eva Zupančič",
        name_2: "Koper",
    },
    {
        title: "PRIHODKI: €58,744", 
        description: `"Sodeloval sem z mojimi najboljšimi prijatelji in skupaj smo zadeli jackpot po samo 3 tednih. Robot trgovanja naredi vso delo namesto vas. Skupaj smo zaslužili več kot €17,000 tedensko"`,
        img: img6,
        name_1: "Anja Potočnik & Nela Kovač",
        name_2: "Velenje",
    }
];
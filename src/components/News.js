import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    // articles=[
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Devindra Hardawar",
    //         "title": "Engadget Podcast: Farewell, Apple Car",
    //         "description": "This week, Cherlynn and Devindra discuss some of the editorial changes happening at Engadget. We’ve lost some amazing colleagues, but we’re still here aiming to deliver the best tech coverage possible. As for this week’s news, we chat about the reported death…",
    //         "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_686fc060-fbfa-4a27-88e3-4ca48cb4d230",
    //         "urlToImage": null,
    //         "publishedAt": "2024-03-01T13:30:39Z",
    //         "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 241 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MacRumors"
    //         },
    //         "author": "Joe Rossignol",
    //         "title": "Kuo: Apple Watch Ultra With MicroLED Display Indeed Canceled",
    //         "description": "Earlier this week, Apple supplier AMS-Osram announced it would \"re-assess its microLED strategy\" after a \"cornerstone project\" was \"unexpectedly cancelled.\" Counterpoint Research's Display Supply Chain Consultants informed MacRumors that this project related …",
    //         "url": "https://www.macrumors.com/2024/03/01/kuo-says-microled-apple-watch-ultra-canceled/",
    //         "urlToImage": "https://images.macrumors.com/t/j9lfHW_qnx4RSnqtw-9s8ujUXyo=/2500x/article-new/2023/09/Apple-Watch-Ultra-2-hero-feature-white.jpg",
    //         "publishedAt": "2024-03-01T13:19:37Z",
    //         "content": "Earlier this week, Apple supplier AMS-Osram announced it would \"re-assess its microLED strategy\" after a \"cornerstone project\" was \"unexpectedly cancelled.\" Counterpoint Research's Display Supply Cha… [+494 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MacRumors"
    //         },
    //         "author": "Tim Hardwick",
    //         "title": "10 New Things Your iPhone Can Do in Next Week's iOS 17.4 Update",
    //         "description": "Apple will this month release iOS 17.4, its biggest iPhone software update of the year so far, featuring a number of features and changes that users have been anticipating for quite a while.\n\n\n\n\n\nBelow, we've listed 10 new things that your iPhone will be able…",
    //         "url": "https://www.macrumors.com/2024/03/01/10-things-iphone-can-do-next-ios-update/",
    //         "urlToImage": "https://images.macrumors.com/t/6BoxJlDNYWMJThIFu4YbS9uWVSo=/2500x/article-new/2024/02/iOS-17.4-Everything-New-Your-iPhone-Can-Do-Feature.jpg",
    //         "publishedAt": "2024-03-01T09:30:00Z",
    //         "content": "Apple will this month release iOS 17.4, its biggest iPhone software update of the year so far, featuring a number of features and changes that users have been anticipating for quite a while.\r\nBelow, … [+5831 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "Beatrice Nolan",
    //         "title": "Apple may soon be feeling the heat from investors over its slow rollout of buzzy AI products",
    //         "description": "On Wednesday, Tim Cook attempted to reassure shareholders that the company is committed to AI innovation.",
    //         "url": "https://www.businessinsider.com/apple-investors-ai-race-tim-cook-2024-2",
    //         "urlToImage": "https://i.insider.com/65e07870ce7f1785b2e4d75d?width=1200&format=jpeg",
    //         "publishedAt": "2024-03-01T09:00:02Z",
    //         "content": "Tim Cook told shareholders the company would provide more details on its AI plans. Tyler Le/Insider\r\n<ul><li>Apple has yet to make its mark when it comes to generative AI.</li><li>Tim Cook has tried … [+2199 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "Theron Mohamed",
    //         "title": "Why Zuck, Ivanka Trump and the world's rich and famous are flocking to a lavish party in India",
    //         "description": "US companies are eager to make inroads into the fast-growing Indian market, and Anant Ambani's extravagant pre-wedding event may help CEOs open doors.",
    //         "url": "https://www.businessinsider.com/mark-zuckerberg-meta-ambani-wedding-party-big-tech-india-market-2024-3",
    //         "urlToImage": "https://i.insider.com/65e1dfd26080194819fb84c4?width=1200&format=jpeg",
    //         "publishedAt": "2024-03-01T14:03:57Z",
    //         "content": "Ivanka Trump arrives for the Ambani wedding pre-party in Jamnagar, India.Ajit Solanki/AP\r\n<ul><li>Mark Zuckerberg, Bill Gates and other CEOs and celebs are at a wedding pre-party in India this weeken… [+3988 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "Grace Dean",
    //         "title": "Panera Bread is promising bigger portions and lower prices in its 'largest menu transformation ever'",
    //         "description": "Panera Bread is slashing some menu items like flatbreads to make room for new sandwiches and salads.",
    //         "url": "https://www.businessinsider.com/panera-bread-bigger-portions-lower-prices-biggest-menu-revamp-overhaul-2024-3",
    //         "urlToImage": "https://i.insider.com/65e1b1be6080194819fb7de5?width=1200&format=jpeg",
    //         "publishedAt": "2024-03-01T11:04:14Z",
    //         "content": "Panera is cutting some items to streamline its menu, including its flatbreads.Panera Bread\r\n<ul><li>Panera Bread is rolling out what it says is its biggest-ever menu revamp in April.</li><li>It inclu… [+2709 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hipertextual"
    //         },
    //         "author": "Eduardo Arcos",
    //         "title": "Así funcionará la «notarización» de apps para el iPhone descargadas en tiendas alternativas",
    //         "description": "Apple ha publicado un nuevo documento detallando cómo intentarán mantener la seguridad y privacidad en el iPhone y al mismo tiempo cumplir con la Ley de mercados digitales europea y hacer los cambios necesarios en iOS debido a la nueva regulación. El document…",
    //         "url": "http://hipertextual.com/2024/03/notarizacion-de-apps-ios-iphone-apple",
    //         "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/12/iphone-15-pantalla-completa.jpg",
    //         "publishedAt": "2024-03-01T12:00:59Z",
    //         "content": "Apple ha publicado un nuevo documento detallando cómo intentarán mantener la seguridad y privacidad en el iPhone y al mismo tiempo cumplir con la Ley de mercados digitales europea y hacer los cambios… [+3859 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hipertextual"
    //         },
    //         "author": "Aglaia Berlutti",
    //         "title": "‘El astronauta’, crítica: una historia de ciencia ficción sin mucho que ofrecer",
    //         "description": "Adam Sandler se encuentra en una especie de territorio de nadie. Tiene momentos brillantes en la comedia bobalicona y corporal, como en Happy Gilmore, estrenada en 1996. Al otro extremo, ha demostrado ser un actor lo suficientemente interesante como para ser …",
    //         "url": "http://hipertextual.com/2024/03/el-astronauta-critica-una-historia-de-ciencia-ficcion-sin-mucho-que-ofrecer",
    //         "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2024/02/spaceman-netflix.jpeg?fit=1200%2C675&quality=70&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T08:00:00Z",
    //         "content": "Adam Sandler se encuentra en una especie de territorio de nadie. Tiene momentos brillantes en la comedia bobalicona y corporal, como en Happy Gilmore, estrenada en 1996. Al otro extremo, ha demostrad… [+5592 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka.com"
    //         },
    //         "author": "Enrique Pérez",
    //         "title": "Un cambio histórico para iOS: Apple activa el 'sideloading' en Europa para instalar apps fuera de la App Store",
    //         "description": "iOS no volverá a ser igual. Hoy, 1 de marzo, Apple ha anunciado que ya ha iniciado el sistema para el 'sideloading' para los usuarios europeos. Tal y como estaba previsto, en virtud de adaptarse a la nueva Ley de Mercados Digitales (DMA), Apple ya ofrece acce…",
    //         "url": "https://www.xataka.com/aplicaciones/dia-historico-para-ios-apple-permite-sideloading-europa-para-instalar-apps-fuera-su-app-store",
    //         "urlToImage": "https://i.blogs.es/4a1074/ios-sideloading/840_560.jpeg",
    //         "publishedAt": "2024-03-01T12:00:00Z",
    //         "content": "iOS no volverá a ser igual. Hoy, 1 de marzo, Apple ha anunciado que ya ha iniciado el sistema para el 'sideloading' para los usuarios europeos. Tal y como estaba previsto, en virtud de adaptarse a la… [+4930 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka.com"
    //         },
    //         "author": "Javier Lacort",
    //         "title": "Intentando desentrañar el gran misterio: por qué Apple canceló su coche tras diez años y 10.000 millones de dólares",
    //         "description": "Tras diez años de rumores, filtraciones, cambios de rumbo, ensayos en un viejo circuito de Chrysler y enigmas por despejar, Mark Gurman, siempre Gurman, anunció que Apple ha decidido abandonar la idea de lanzar su propio coche. Un gatillazo para el conocido c…",
    //         "url": "https://www.xataka.com/movilidad/intentando-desentranar-el-gran-misterio-por-que-apple-cancelo-su-coche-tras-diez-anos-y-10-000-millones-de-dolares",
    //         "urlToImage": "https://i.blogs.es/7ce0b6/cook-coche/840_560.jpeg",
    //         "publishedAt": "2024-03-01T10:00:54Z",
    //         "content": "Tras diez años de rumores, filtraciones, cambios de rumbo, ensayos en un viejo circuito de Chrysler y enigmas por despejar, Mark Gurman, siempre Gurman, anunció que Apple ha decidido abandonar la ide… [+8646 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka.com"
    //         },
    //         "author": "Jose García",
    //         "title": "La primera tienda alternativa a la App Store ya se ve en el horizonte. Setapp llegará pronto a los iPhone europeos",
    //         "description": "Marzo ya está aquí y la App Store de Apple está a punto de ponerse patas arriba. Con la entrada en vigor de la DMA (Ley de Mercados Digitales) y su evidente implementación por parte de Apple, vamos a asistir a la llegada de las tiendas de aplicaciones de terc…",
    //         "url": "https://www.xataka.com/aplicaciones/primera-tienda-alternativa-a-app-store-se-ve-horizonte-setapp-llegara-pronto-a-iphone-europeos",
    //         "urlToImage": "https://i.blogs.es/6199fb/setapp/840_560.jpeg",
    //         "publishedAt": "2024-03-01T09:05:59Z",
    //         "content": "Marzo ya está aquí y la App Store de Apple está a punto de ponerse patas arriba. Con la entrada en vigor de la DMA (Ley de Mercados Digitales) y su evidente implementación por parte de Apple, vamos a… [+2633 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka.com"
    //         },
    //         "author": "Laura Sacristán",
    //         "title": "Llevo muchos años viendo demos del 5G en el MWC y es la primera vez que alguna me parece útil",
    //         "description": "El MWC 2024 ha llegado a su fin y es hora de hacer balance. Quien firma estas líneas lleva bastantes ediciones a sus espaldas (no diré cuántas...) y, si hay algo que he podido comprobar en los últimos años, es que las demos del 5G se suceden por doquier.\n<!--…",
    //         "url": "https://www.xataka.com/servicios/llevo-muchos-anos-viendo-demos-5g-mwc-primera-vez-que-alguna-me-parece-util",
    //         "urlToImage": "https://i.blogs.es/dac906/operadores-mwc/840_560.jpeg",
    //         "publishedAt": "2024-03-01T11:00:57Z",
    //         "content": "El MWC 2024 ha llegado a su fin y es hora de hacer balance. Quien firma estas líneas lleva bastantes ediciones a sus espaldas (no diré cuántas...) y, si hay algo que he podido comprobar en los último… [+5610 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Cool Hunting"
    //         },
    //         "author": "Evan Orensten",
    //         "title": "Maserati’s GranCabrio Trofeo",
    //         "description": "The next generation of the brand's convertible grand tourer Following last year’s launch of the all-new GranTursimo, Maserati announces the highly anticipated convertible version, the GranCabrio. Initially available in the brand’s top-of-the-line …",
    //         "url": "http://coolhunting.com/design/maseratis-grancabrio-trofeo/",
    //         "urlToImage": "https://150102931.v2.pressablecdn.com/wp-content/uploads/2024/02/02_Maserati_GranCabrio_Trofeo-scaled.jpg",
    //         "publishedAt": "2024-03-01T00:08:04Z",
    //         "content": "The next generation of the brand's convertible grand tourer\n\n\nRead\nDesign\r\n\n\n\n\n\nMaserati’s GranCabrio Trofeo\r\n\n\n\nThe next generation of the brand’s convertible grand tourer\r\n\n\r\n\n\n\n\nEvan Orensten\r\n\n\n2… [+2222 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "@tucson_police"
    //         },
    //         "author": "John Gruber",
    //         "title": "Larry David Promoting Siri",
    //         "description": null,
    //         "url": "https://twitter.com/rjonesy/status/1762250373035905415",
    //         "urlToImage": null,
    //         "publishedAt": "2024-03-01T01:29:34Z",
    //         "content": "Speaking of Larry David, remember the never-shown (and now, alas, deleted from the public internet because of copyright takedowns from Apple) 10-minute video that was supposed to open WWDC 2014, feat… [+1325 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Eclecticlight.co"
    //         },
    //         "author": null,
    //         "title": "Apple Silicon: A little help from friends and co-processors",
    //         "description": "How the NEON vector processor, neural engine, matrix co-processor, and GPU all deliver high performance with low power and energy use.",
    //         "url": "https://eclecticlight.co/2024/03/01/apple-silicon-4-a-little-help-from-friends-and-co-processors/",
    //         "urlToImage": "https://eclecticlightdotcom.files.wordpress.com/2023/12/m1maxvdspmmulcores.png",
    //         "publishedAt": "2024-03-01T08:13:17Z",
    //         "content": "So far in this series, I have looked in broad terms at how the CPU cores in Apple silicon chips work, and how they use frequency control and two types of core to deliver high performance with low pow… [+9538 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Lever.co"
    //         },
    //         "author": null,
    //         "title": "Photoroom (YC S20) Is Hiring a Senior React and State Architect in Paris (Mobx)",
    //         "description": "TL;DR  We are seeking a highly skilled and experienced Senior Web Frontend Engineer specializing in frontend architecture to join our team. In this role, you will be responsible for designing and implementing a scalable, high-performance web application tha…",
    //         "url": "https://jobs.lever.co/photoroom/fb70ca3c-632f-4b1b-b6e2-004f0240011d?lever-origin=applied&lever-source%5B%5D=yc",
    //         "urlToImage": "https://lever-client-logos.s3.us-west-2.amazonaws.com/0218a30b-1e33-41d5-af20-24e359af06b2-1625477711116.png",
    //         "publishedAt": "2024-03-01T09:50:20Z",
    //         "content": "PhotoRoom develops cutting-edge technology that empowers entrepreneurs, small businesses, and merchants to easily create images that sell - leveraging deep learning. Our ambition: power the internets… [+4453 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Cloudinary.com"
    //         },
    //         "author": "melindapham",
    //         "title": "JPEG XL and the Pareto Front",
    //         "description": "Version 0.10 of libjxl, the reference implementation for JPEG XL, has just been released. The main improvement this version brings, is that the so-called",
    //         "url": "https://cloudinary.com/blog/jpeg-xl-and-the-pareto-front",
    //         "urlToImage": "https://res.cloudinary.com/cloudinary-marketing/images/v1708730240/jpgxl_pareto_front-blog/jpgxl_pareto_front-blog-jpg?_i=AA",
    //         "publishedAt": "2024-03-01T06:55:59Z",
    //         "content": "Version 0.10 of libjxl, the reference implementation for JPEG XL, has just been released. The main improvement this version brings, is that the so-called “streaming encoding” API has now been fully i… [+23818 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "heise online"
    //         },
    //         "author": "Ben Schwan",
    //         "title": "Apple ID: Benennt Apple seinen zentralen Account um?",
    //         "description": "Apples zentraler Zugang soll einen neuen Namen erhalten. Womöglich bekommt er noch eine wichtigere Bedeutung als bereits jetzt.",
    //         "url": "https://www.heise.de/news/Apple-ID-Benennt-Apple-seinen-zentralen-Account-um-9642131.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/9/6/2/5/appleid_account-167ddfd1b0d1eb56.png",
    //         "publishedAt": "2024-03-01T10:32:00Z",
    //         "content": "Nahezu jeder Benutzer von Apple-Produkten verfügt auch über eine Apple ID. Dabei handelt es sich um den zentralen Zugang zu allen Diensten des Konzerns, sei es nun iCloud, App Store, Apple Music, den… [+1994 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "heise online"
    //         },
    //         "author": "Ben Schwan",
    //         "title": "Selbstreparatur: Apple erweitert auf M3-Macs",
    //         "description": "Apple unterstützt beim Self-Service-Repair-Programm nun auch aktuelle Macs. In den USA wird zudem erstmals eine Diagnosesoftware bereitgestellt.",
    //         "url": "https://www.heise.de/news/Selbstreparatur-Apple-erweitert-auf-M3-Macs-9642127.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/9/6/2/3/Apple-EU-Self-Service-repair-iPhone_big.jpg.large_2x-4b88da11e47e668b.jpg",
    //         "publishedAt": "2024-03-01T10:01:00Z",
    //         "content": "Apple erlaubt es künftig Bastlern und anderen Interessierten, auch Macs mit M3-SoC selbst zu reparieren. Dazu wurde das Self-Service-Repair-Programm (SSRP) entsprechend erweitert. Abgedeckt werden da… [+1932 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "heise online"
    //         },
    //         "author": "Ben Schwan",
    //         "title": "\"Transformative Chancen\": Apple-Chef macht erneut KI-Andeutungen",
    //         "description": "Apple will sehr bald zeigen, was der Konzern in Sachen generative KI plant. Erneut gab es direkte Hinweise aus der Firmenspitze.",
    //         "url": "https://www.heise.de/news/Transformative-Chancen-Apple-Chef-macht-erneut-KI-Andeutungen-9642135.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/4/9/6/2/7/Screenshot_2023-09-14_at_09.47.09-56cae48eea946e22.png",
    //         "publishedAt": "2024-03-01T11:48:00Z",
    //         "content": "Apple-Chef Tim Cook hat sich erneut zum Thema generative KI geäußert. Bei der Aktionärsversammlung des iPhone-Herstellers in dieser Woche versprach er, dass man demnächst \"Neuland betreten\" werde im … [+2371 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "heise online"
    //         },
    //         "author": "Malte Kirchner",
    //         "title": "Analyst: Micro-LED-Pläne für Apple Watch wurden angeblich verworfen",
    //         "description": "Jahrelang war von Bemühungen Apples zu hören, Micro-LED-Displays einzuführen. Neue Gerüchte besagen, dass Apple jetzt den Stecker gezogen haben soll.",
    //         "url": "https://www.heise.de/news/Analyst-Micro-LED-Plaene-fuer-Apple-Watch-wurden-angeblich-verworfen-9643922.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/0/5/8/3/applewatchultra_diving-62d0211c73fd7f85.jpg",
    //         "publishedAt": "2024-03-01T14:05:00Z",
    //         "content": "Apple soll seine Pläne für Micro-LED-Displays in der Apple Watch gestoppt haben. Wie aus Zuliefererkreisen verlautet, sei das Unternehmen zu der Ansicht gelangt, dass Micro-LED in der Uhr keinen nenn… [+1805 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "heise online"
    //         },
    //         "author": null,
    //         "title": "Sideloading mit iOS 17.4: So will Apple iPhone-Nutzer schützen",
    //         "description": "Apple warnt vor neuen Risiken, viele europäische Nutzer würden die Öffnung ablehnen. Der Konzern prüft aber auch in Zukunft alle iPhone-Apps.",
    //         "url": "https://www.heise.de/news/Sideloading-mit-iOS-17-4-So-will-Apple-iPhone-Nutzer-schuetzen-9643696.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
    //         "urlToImage": null,
    //         "publishedAt": "2024-03-01T12:00:00Z",
    //         "content": "Apple warnt vor neuen Risiken, viele europäische Nutzer würden die Öffnung ablehnen. Der Konzern prüft aber auch in Zukunft alle iPhone-Apps."
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "heise online"
    //         },
    //         "author": "Ben Schwan",
    //         "title": "Erster alternativer App Store: MacPaws Setapp kommt aufs iPhone",
    //         "description": "Die ukrainische Softwarefirma packt ihre Setapp-Plattform in einen eigenen \"Alternative App Marketplace\". Aktuell darf man sich vormerken.",
    //         "url": "https://www.heise.de/news/Erster-alternativer-App-Store-MacPaws-Setapp-kommt-aufs-iPhone-9643215.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/0/2/0/6/setapp_ios-45e62e8941292806.png",
    //         "publishedAt": "2024-03-01T07:48:00Z",
    //         "content": "Die ukrainische Firma MacPaw ist das erste Unternehmen, das offiziell einen alternativen App Store für das iPhone in der Europäischen Union angekündigt hat. Eine am Donnerstagabend aufgesetzte Websit… [+2091 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "heise online"
    //         },
    //         "author": "Mark Mantel",
    //         "title": "AMD: HDMI-Forum verhindert HDMI 2.1 unter Linux",
    //         "description": "AMD kann keinen HDMI-2.1-Support in seine Radeon-Treiber für Linux einbauen. Schuld ist offenbar das HDMI-Forum.",
    //         "url": "https://www.heise.de/news/AMD-HDMI-Forum-verhindert-HDMI-2-1-unter-Linux-9643729.html",
    //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/0/4/8/1/Radeon_RX_7700_7800_Navi32_Aufmacher-ca87346676f74e22.jpeg",
    //         "publishedAt": "2024-03-01T12:24:00Z",
    //         "content": "AMDs Radeon-Grafikkarten bleiben unter Linux-Betriebssystemen auf HDMI 2.0 beschränkt. Treiber für HDMI 2.1 rücken in weite Ferne. 4K-Monitore laufen deshalb nur mit 60 Hertz und Funktionen wie HDMI … [+2152 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Benjamin Mayo",
    //         "title": "Apple TV+ shows and movies: Everything to watch on Apple TV Plus",
    //         "description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $9.99 per month. Here’s every Apple original television show and movie avai…",
    //         "url": "https://9to5mac.com/2024/03/01/apple-tv-plus-tv-shows-movies-guide/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T09:13:13Z",
    //         "content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $9.99 per month… [+78473 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Ben Lovejoy",
    //         "title": "Micro-LED Apple Watch Ultra project is unlikely to have been cancelled",
    //         "description": "Ah, the joys of Apple supply-chain reports. Two reports yesterday said that Apple’s micro-LED Apple Watch Ultra project was apparently cancelled, based on a statement by an Apple display supplier.\n\n\n\nDoubt was expressed about this conclusion, and today Ming-C…",
    //         "url": "https://9to5mac.com/2024/03/01/micro-led-apple-watch/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/Micro-LED-Apple-Watch-Ultra-project.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T14:11:42Z",
    //         "content": "Ah, the joys of Apple supply-chain reports. Two reports yesterday said that Apple’s micro-LEDApple Watch Ultra project was apparently cancelled, based on a statement by an Apple display supplier.\r\nDo… [+3351 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Benjamin Mayo",
    //         "title": "Ridley Scott’s ‘Napoleon’ movie is now streaming on Apple TV+",
    //         "description": "You can now watch Napoleon on Apple TV+ today. Following an exclusive theatrical run and VOD window, the Ridley Scott epic is now streaming free with an Apple TV+ subscription. \n\n\n\nIn the film, Joaquin Phoenix stars as Napoleon Bonaparte and Vanessa Kirby pla…",
    //         "url": "https://9to5mac.com/2024/03/01/ridley-scott-napoleon-movie-streaming-apple-tv/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/apple-tv-napoleon-how-to-watch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T14:19:48Z",
    //         "content": "You can now watch Napoleon on Apple TV+ today. Following an exclusive theatrical run and VOD window, the Ridley Scott epic is now streaming free with an Apple TV+ subscription. \r\nIn the film, Joaquin… [+2301 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Filipe Espósito",
    //         "title": "Here’s how Apple ships a replacement Vision Pro unit to AppleCare+ customers",
    //         "description": "Apple Vision Pro arrived in stores and in the hands of customers almost a month ago, and we’ve already seen that Apple’s mixed reality headset is quite fragile and can easily break if you’re not careful enough. And yes, paying for a repair isn’t cheap, even w…",
    //         "url": "https://9to5mac.com/2024/02/29/apple-vision-pro-replacement-unit/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/broken-apple-vision-pro-replacement.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T03:17:26Z",
    //         "content": "Apple Vision Pro arrived in stores and in the hands of customers almost a month ago, and we’ve already seen that Apple’s mixed reality headset is quite fragile and can easily break if you’re not care… [+1551 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Benjamin Mayo",
    //         "title": "Apple TV+ adds a limited time library of 50 movies to stream for free",
    //         "description": "Apple TV+ has launched a limited time collection of movies to stream for free as part of your Apple TV+ subscription. The company has done this occasionally in the past to coincide with the themed release of new originals, but this is by far the biggest drop.…",
    //         "url": "https://9to5mac.com/2024/03/01/apple-tv-adds-a-limited-time-library-of-50-movies-to-stream-for-free/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/great-movies-apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T10:03:12Z",
    //         "content": "Apple TV+ has launched a limited time collection of movies to stream for free as part of your Apple TV+ subscription. The company has done this occasionally in the past to coincide with the themed re… [+2350 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Zac Hall",
    //         "title": "Before CarPlay, Apple previewed ‘iOS in the Car’ with a very different design",
    //         "description": "CarPlay has graduated from a niche upgrade option to a mainstream standard feature in new cars, replacing clunky radio user interfaces with a design very familiar for iPhone users. But before Apple set CarPlay loose in the wild, the world was shown a very dif…",
    //         "url": "https://9to5mac.com/2024/03/01/before-carplay-apple-previewed-ios-in-the-car-with-a-very-different-design/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/02/iOS-in-the-Car-lol.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T14:20:31Z",
    //         "content": "CarPlay has graduated from a niche upgrade option to a mainstream standard feature in new cars, replacing clunky radio user interfaces with a design very familiar for iPhone users. But before Apple s… [+3517 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Ben Lovejoy",
    //         "title": "iPhone spyware company NSO suffers major defeat in US court, in Meta lawsuit",
    //         "description": "The Android and iPhone spyware company NSO has suffered a major defeat in a US court, after a judge ruled that the company must hand over its Pegasus code to Meta.\n\n\n\nIt’s the latest setback for the company, which has been blacklisted in the US, sued by Apple…",
    //         "url": "https://9to5mac.com/2024/03/01/iphone-spyware-company-nso-must-reveal-code/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/iPhone-spyware-company-NSO-must-reveal-code.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2024-03-01T11:52:26Z",
    //         "content": "The Android and iPhone spyware company NSO has suffered a major defeat in a US court, after a judge ruled that the company must hand over its Pegasus code to Meta.\r\nIt’s the latest setback for the co… [+2480 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MarketWatch"
    //         },
    //         "author": "Mike Murphy",
    //         "title": "Taylor Swift, ‘3 Body Problem,’ ‘Shōgun’ highlight a blockbuster March for streaming",
    //         "description": "From ‘Road House’ to March Madness, here’s what’s worth streaming this month",
    //         "url": "https://www.marketwatch.com/story/taylor-swift-3-body-problem-shogun-highlight-a-blockbuster-march-for-streaming-b09037a7",
    //         "urlToImage": "https://images.mktw.net/im-861901/social",
    //         "publishedAt": "2024-03-01T12:07:00Z",
    //         "content": "Big names, big budgets and big events are on tap for Marchs streaming calendar.However you look at it from Kate Winslets steely glare to Jake Gyllenhaals ripped abs; from Netflixs $160 million series… [+21669 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MarketWatch"
    //         },
    //         "author": "Jamie Chisholm",
    //         "title": "Stocks can still rise even as momentum signals suggest caution, history finds.",
    //         "description": "Overbought momentum doesn’t mean rally will come to a stop, says analyst.",
    //         "url": "https://www.marketwatch.com/story/stocks-can-still-rise-even-as-momentum-signals-suggest-caution-history-finds-e7a94c09",
    //         "urlToImage": "https://images.mktw.net/im-16255885/social",
    //         "publishedAt": "2024-03-01T11:36:00Z",
    //         "content": "The records keep tumbling. The Nasdaq Composite \r\n COMP\r\n has joined the S&amp;P 500 \r\n SPX\r\n in securing a new high. Early Friday futures suggest a marginal dip from those levels at the opening bell… [+7682 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "AppleInsider"
    //         },
    //         "author": "news@appleinsider.com (William Gallagher)",
    //         "title": "Apple Watch Ultra is not the only micro LED project Apple has cancelled",
    //         "description": "Following AppleInsider's report on Thursday about the likely cancellation of the Apple Watch Ultra with micro LED, analyst Ming-Chi Kuo says that Apple has abandoned nearly all of its plans to use micro LED displays.Apple Watch UltraFollowing news that the mi…",
    //         "url": "https://appleinsider.com/articles/24/03/01/apple-watch-ultra-is-not-the-only-micro-led-project-apple-has-cancelled",
    //         "urlToImage": "https://photos5.appleinsider.com/gallery/56620-115114-54184-109177-Apple-Watch-Ultra-xl-xl.jpg",
    //         "publishedAt": "2024-03-01T13:51:23Z",
    //         "content": "Apple Watch Ultra\r\nFollowing AppleInsider's report on Thursday about the likely cancellation of the Apple Watch Ultra with micro LED, analyst Ming-Chi Kuo says that Apple has abandoned nearly all of … [+2360 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "AppleInsider"
    //         },
    //         "author": "news@appleinsider.com (William Gallagher)",
    //         "title": "Watch 51 classic movies for free on Apple TV+",
    //         "description": "Apple TV+ has made available 51 movies ranging from \"American Sniper\" to \"Zodiac,\" all for free for a limited time to subscribers.Films from Apple's free movie selectionApple has occasionally made one-off films like \"Silver Linings Playbook,\" or series of mov…",
    //         "url": "https://appleinsider.com/articles/24/03/01/watch-51-classic-movies-for-free-on-apple-tv",
    //         "urlToImage": "https://photos5.appleinsider.com/gallery/58788-119788-Screenshot-2024-03-01-at-60317-AM-xl.jpg",
    //         "publishedAt": "2024-03-01T11:13:02Z",
    //         "content": "Films from Apple's free movie selection\r\nApple TV+ has made available 51 movies ranging from \"American Sniper\" to \"Zodiac,\" all for free for a limited time to subscribers.\r\nApple has occasionally mad… [+2065 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "AppleInsider"
    //         },
    //         "author": "news@appleinsider.com (William Gallagher)",
    //         "title": "Apple cites bevy of scared users to back up its case against the EU DMA",
    //         "description": "Apple has to comply with the EU's new law about rival App Stores, but it's protesting all the way and is now showing emails from users who fear the changes.Tim CookAhead of the March 7, 2024 deadline and the facility for third-party app stores in the EU that …",
    //         "url": "https://appleinsider.com/articles/24/03/01/apple-cites-bevy-of-scared-users-to-back-up-its-case-against-the-eu-dma",
    //         "urlToImage": "https://photos5.appleinsider.com/gallery/58790-119790-000-lead-Tim-Cook-xl.jpg",
    //         "publishedAt": "2024-03-01T12:40:25Z",
    //         "content": "Tim Cook\r\nApple has to comply with the EU's new law about rival App Stores, but it's protesting all the way and is now showing emails from users who fear the changes.\r\nAhead of the March 7, 2024 dead… [+1633 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "AppleInsider"
    //         },
    //         "author": "news@appleinsider.com (William Gallagher)",
    //         "title": "Apple stresses security risks of complying with EU's Digital Markets Act",
    //         "description": "Apple has published a whitepaper detailing how it says it is working to protect EU users and emphasizing the risks of opening up the iPhone to rival App Stores.Apple's whitepaper details its compliance with the EUTo comply with the new Digital Markets Act (DM…",
    //         "url": "https://appleinsider.com/articles/24/03/01/apple-stresses-security-risks-of-complying-with-eus-digital-markets-act",
    //         "urlToImage": "https://photos5.appleinsider.com/gallery/58789-119789-000-lead-whitepaper-xl.jpg",
    //         "publishedAt": "2024-03-01T12:02:26Z",
    //         "content": "Apple's whitepaper details its compliance with the EU\r\nApple has published a whitepaper detailing how it says it is working to protect EU users and emphasizing the risks of opening up the iPhone to r… [+2601 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "AppleInsider"
    //         },
    //         "author": "news@appleinsider.com (Mike Wuerthele)",
    //         "title": "Apple's 2024 iPad & iPhone chip plan has been detailed in a new leak",
    //         "description": "A low-profile leaker with a very good track record has spelled out what they believe to be Apple's entire iPad chip plan, and what chips they expect to see in the iPhone 16.Using iPad Pro and Apple PencilThe data spans multiple posts and products. Detailed in…",
    //         "url": "https://appleinsider.com/articles/24/03/01/apples-2024-ipad-iphone-chip-plan-has-been-detailed-in-a-new-leak",
    //         "urlToImage": "https://photos5.appleinsider.com/gallery/53415-107228-M2-iPad-Pro-Hover-xl.jpg",
    //         "publishedAt": "2024-03-01T14:48:25Z",
    //         "content": "Using iPad Pro and Apple Pencil\r\nA low-profile leaker with a very good track record has spelled out what they believe to be Apple's entire iPad chip plan and what chips they expect to see in the iPho… [+2813 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "AppleInsider"
    //         },
    //         "author": "news@appleinsider.com (Michael Stroup)",
    //         "title": "Flash deal: save 60% on a lifetime Rosetta Stone subscription",
    //         "description": "You have the perfect tool for learning a new language at your fingertips with Rosetta Stone, and now StackCommerce is offering the famous language-learning software at a 60% discount with more than enough time before spring break travel.Learn a new language b…",
    //         "url": "https://appleinsider.com/articles/24/03/01/flash-deal-save-60-on-a-lifetime-rosetta-stone-subscription",
    //         "urlToImage": "https://photos5.appleinsider.com/gallery/58783-119781-56760-115428-rosetta-stone-lifetime-deal-xl-xl.jpg",
    //         "publishedAt": "2024-03-01T02:17:33Z",
    //         "content": "Learn a new language before your spring break trip. \r\nYou have the perfect tool for learning a new language at your fingertips with Rosetta Stone, and now StackCommerce is offering the famous languag… [+1816 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Gizmodo.jp"
    //         },
    //         "author": "福田ミホ",
    //         "title": "Razer Blade 16とMacBook Pro M3 Max、対決したらどっちが勝つ？",
    //         "description": "Razer最新のゲーミングノートPC「Razer Blade 16」と、Appleの最強ラップトップ「M3 Max搭載MacBook Pro」の比較。",
    //         "url": "https://www.gizmodo.jp/2024/03/razer-blade-16-vs-macbook-pro-m3-max.html",
    //         "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/01/240229_razerbladevsm3mbp1.jpg?w=1280&h=630&f=jpg",
    //         "publishedAt": "2024-03-01T05:00:00Z",
    //         "content": "1!?\r\nPCMacBook Pro \r\nRazerPCRazer Blade 16AppleM3 MaxMacBook Pro\r\nPC4,000644800M3 Max16MacBook Pro4,30064Razer Blade 16Razer Blade 16GeForce RTX 4090796800\r\nRazer BladePC3DM3 Max MacBook ProApplemacO… [+1552 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Gizmodo.jp"
    //         },
    //         "author": "R.Mitsubori",
    //         "title": "WordPressとTumblr、AI企業にユーザーコンテンツを売却か",
    //         "description": "404Mediaによると、オープンソースのブログソフトWordPressやSNS・ブログツールのTumblrを所有するAutomattic社が、自社プラットフォームのコンテンツをMidJourneyやOpenAIなどのAI企業に売却する交渉を進めていることがわかりました。",
    //         "url": "https://www.gizmodo.jp/2024/03/wordpress-tumblr-plan-sell-user-content-ai-companies.html",
    //         "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/03/01/shutterstock_350982164.jpg?w=1280&h=630&f=jpg",
    //         "publishedAt": "2024-03-01T04:00:00Z",
    //         "content": "AI\r\n404MediaWordPressSNSTumblrAutomatticMidJourneyOpenAIAI\r\nAI\r\n404AIAutomatticAutomattic\r\nApple MusicAutomattic\r\nAutomattic404AITumblr\r\nAI\r\nOpenAI2022ChatGPTAI\r\n404 MediaAutomattic2AIWordPressSquare… [+47 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Gizmodo.jp"
    //         },
    //         "author": "はらいさん",
    //         "title": "iOS 18は6年前のiPhoneでも使えるかも",
    //         "description": "Image:Hadrian/Shutterstock.comえ、ひょっとしてまだ使えるの？久々の大型アップデートが期待されているiOS18は、恐らく今年も6月あたりに開催されるWWDC2024にて発表されることが予想されていますが、早くもiOS18に対応するモデルが判明したかもしれません。iOS17の壁を乗り超えたiPhoneはそのままiOS18にアプデ可能？MacRumorsによると、過去に未配",
    //         "url": "https://www.gizmodo.jp/2024/03/ios-18-iphone-6-years-ago.html",
    //         "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2024/02/29/shutterstock_1188265438.jpg?w=1280&h=630&f=jpg",
    //         "publishedAt": "2024-03-01T02:00:00Z",
    //         "content": "iOS 186WWDC 2024iOS 18\r\nMacRumorsiOSXTwitteriOS 18iPhone\r\niOS 17iPhoneiOS 18\r\nImage: Apple\r\niOS 17iPhone\r\niOS 17iPhoneiPhone SE23A12 BioniciPhone XSiPhone XRiPhoneiOS 18iOS 18iOS\r\niOS 18AIiPhoneiPhon… [+47 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "https://www.facebook.com/bbcnews",
    //         "title": "Parts of UK may have had wettest February on record",
    //         "description": "Weather data to be released on Friday will also likely show that this winter was less frosty than normal.",
    //         "url": "https://www.bbc.co.uk/news/science-environment-68435197",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ACF5/production/_132777244_mediaitem132776837.jpg",
    //         "publishedAt": "2024-03-01T07:13:33Z",
    //         "content": "Parts of the UK including East Anglia, the Midlands and areas of South Wales have had their wettest February on record, the Met Office is expected to confirm on Friday.\r\nThis winter's statistics from… [+4850 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Windows Central"
    //         },
    //         "author": "zac.bowden@futurenet.com (Zac Bowden)",
    //         "title": "I actually hate the new Outlook for Windows",
    //         "description": "I'm not waiting any longer for a \"final build\" to share my thoughts on this app. In short, it's terrible. I hate it, and I want the old Mail & Calendar back.",
    //         "url": "https://www.windowscentral.com/software-apps/windows-11/i-actually-hate-the-new-outlook-for-windows",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/qaEgLUAywk4ZTjGPc4Uw8e-1200-80.jpg",
    //         "publishedAt": "2024-03-01T11:03:30Z",
    //         "content": "I am one of the few people who genuinely enjoy the current built-in Mail &amp; Calendar apps on Windows 10 and Windows 11. I think they look great, function well enough, and have (historically) been … [+5757 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Journal du geek"
    //         },
    //         "author": "tristan carballeda",
    //         "title": "L’identifiant Apple pourrait disparaitre au profit d’un “compte Apple”",
    //         "description": "Apple pourrait changer son \"identifiant Apple\" pour un \"compte Apple\", simplement changement de nom ou vraie modification de fond ?",
    //         "url": "https://www.journaldugeek.com/2024/03/01/lidentifiant-apple-pourrait-disparaitre-au-profit-dun-compte-apple/",
    //         "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/01/iphone15-securite.jpg",
    //         "publishedAt": "2024-03-01T13:07:11Z",
    //         "content": "Apple serait sur le point de faire des grands changements dans son écosystème, avec, entre autres, l’arrivée d’iOS 18 en juin prochain. Selon les dires de plusieurs experts, notamment le journaliste … [+2342 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Journal du geek"
    //         },
    //         "author": "Julie Hay",
    //         "title": "Apple TV+ s’attaque au roman qui a inspiré Matrix",
    //         "description": "Après Fondation et Silo, la plateforme confirme son ambition de devenir la destination de référence pour la SF. Apple TV+ annonce s'emparer de l'ouvrage Neuromancien.",
    //         "url": "https://www.journaldugeek.com/2024/03/01/apple-tv-sattaque-au-roman-qui-a-inspire-matrix/",
    //         "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/03/neuromancer-apple-tv-plus-serie.jpg",
    //         "publishedAt": "2024-03-01T12:03:20Z",
    //         "content": "La science-fiction vit de belles heures. Dune : Deuxième Partie, Le Problème à 3 corps ou encore Constellation, les regards des spectateurs en 2024 se tournent bien volontiers vers des futurs hypothé… [+2647 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Applesfera.com"
    //         },
    //         "author": "Jesús Quesada",
    //         "title": "Marzo empieza mejor con este ofertón del iPhone 15 y más chollos de Apple: Cazando Gangas",
    //         "description": "Dejamos febrero atrás y empezamos un nuevo mes, marzo, que es el paso intermedio entre el invierno y la primavera, y qué mejor manera de comenzarlo que con ofertas de Apple. Si estás interesado en renovar alguno de tus dispositivos de la manzana mordida, echa…",
    //         "url": "https://www.applesfera.com/seleccion/marzo-empieza-mejor-este-oferton-iphone-15-chollos-apple-cazando-gangas",
    //         "urlToImage": "https://i.blogs.es/8e47d4/cazando-gangas/840_560.jpeg",
    //         "publishedAt": "2024-03-01T07:00:53Z",
    //         "content": "Dejamos febrero atrás y empezamos un nuevo mes, marzo, que es el paso intermedio entre el invierno y la primavera, y qué mejor manera de comenzarlo que con ofertas de Apple. Si estás interesado en re… [+5091 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Applesfera.com"
    //         },
    //         "author": "Pedro Aznar",
    //         "title": "La revolución de iOS 17.4: Apple toma medidas para proteger a los usuarios de las tiendas alternativas a la App Store, pero los riesgos también crecen",
    //         "description": "Los cambios que la Unión Europea ha pedido a Apple por la Ley de Mercados Digitales están a punto de llegar. No hay fecha oficial, pero calculamos que el próximo martes 6 de marzo se podría liberar la versión pública de iOS 17.4 - una versión muy importante d…",
    //         "url": "https://www.applesfera.com/app-store-1/revolucion-ios-17-4-apple-toma-medidas-para-proteger-a-usuarios-tiendas-alternativas-a-app-store-riesgos-tambien-crecen",
    //         "urlToImage": "https://i.blogs.es/d30171/revolucion-ios-17.4-union-europea-sideloading-app-store-alternativa-002/840_560.jpeg",
    //         "publishedAt": "2024-03-01T12:04:10Z",
    //         "content": "Los cambios que la Unión Europea ha pedido a Apple por la Ley de Mercados Digitales están a punto de llegar. No hay fecha oficial, pero calculamos que el próximo martes 6 de marzo se podría liberar l… [+4138 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Applesfera.com"
    //         },
    //         "author": "Álvaro García M.",
    //         "title": "iOS 17.4 trae nuevos datos sobre la batería: así puedes consultarlos",
    //         "description": "En unos pocos días asistiremos a una importante actualización para iPhone. Y es que son muchas las novedades que trae iOS 17.4, destacando sobre todo la nueva posibilidad de instalar tiendas de aplicaciones que no sean la App Store para usuarios de la Unión E…",
    //         "url": "https://www.applesfera.com/tutoriales/ios-17-4-trae-nuevos-datos-bateria-asi-puedes-consultarlos",
    //         "urlToImage": "https://i.blogs.es/33f137/bateria/840_560.jpeg",
    //         "publishedAt": "2024-03-01T13:01:00Z",
    //         "content": "En unos pocos días asistiremos a una importante actualización para iPhone. Y es que son muchas las novedades que trae iOS 17.4, destacando sobre todo la nueva posibilidad de instalar tiendas de aplic… [+6022 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Applesfera.com"
    //         },
    //         "author": "Isra Fdez",
    //         "title": "Una fuente anónima revela cómo fue reclutada para Apple: no estaba interesada pero acabó trabajando durante más de una década: \"Steve Jobs me atrapó\"",
    //         "description": "Hay testimonios que ponen los pelos de punta, por vibrantes, emocionales y porque van más allá del mero trámite laboral. Una de esas icónicas historias que nos ayudan a imaginar, al menos en parte, cómo sería trabajar al lado de Steve Jobs, esa especie de fue…",
    //         "url": "https://www.applesfera.com/curiosidades/fuente-anonima-revela-como-fue-reclutada-para-apple-no-estaba-interesada-acabo-trabajando-durante-decada-steve-jobs-me-atrapo",
    //         "urlToImage": "https://i.blogs.es/4d0079/steve-jobs-caminando-por-infinite-loop/840_560.jpeg",
    //         "publishedAt": "2024-03-01T11:00:57Z",
    //         "content": "Hay testimonios que ponen los pelos de punta, por vibrantes, emocionales y porque van más allá del mero trámite laboral. Una de esas icónicas historias que nos ayudan a imaginar, al menos en parte, c… [+6319 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Applesfera.com"
    //         },
    //         "author": "Álvaro García M.",
    //         "title": "Llega al iPhone la primera tienda no oficial alternativa a App Store: qué podemos esperar de 'Setapp'",
    //         "description": "A falta de que lleguen iOS 18 y el iPhone 16, la gran noticia del año en el territorio del smartphone de Apple es la llegada de nuevas tiendas de aplicaciones al margen de la App Store, algo que empezará a suceder con iOS 17.4 en países de la Unión Europea. H…",
    //         "url": "https://www.applesfera.com/app-store-1/llega-al-iphone-primera-tienda-no-oficial-alternativa-a-app-store-que-podemos-esperar-setapp",
    //         "urlToImage": "https://i.blogs.es/1edced/setapp/840_560.jpeg",
    //         "publishedAt": "2024-03-01T08:00:54Z",
    //         "content": "A falta de que lleguen iOS 18 y el iPhone 16, la gran noticia del año en el territorio del smartphone de Apple es la llegada de nuevas tiendas de aplicaciones al margen de la App Store, algo que empe… [+4017 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Applesfera.com"
    //         },
    //         "author": "Álvaro García M.",
    //         "title": "Declaración de la Renta 2023: calendario, cuándo y cómo podrás acceder al borrador desde tu iPhone, iPad o Mac",
    //         "description": "Con el tercer mes de 2024 ya con nosotros, en breves tocará hacer balance económico del pasado año, lo cual nos indica que estamos a punto de comenzar la campaña de la Renta de 2023. Para tu tranquilidad, decirte que será un periodo igual de amplio y que hast…",
    //         "url": "https://www.applesfera.com/tutoriales/declaracion-renta-2023-calendario-cuando-como-podras-acceder-al-borrador-tu-iphone-ipad-mac",
    //         "urlToImage": "https://i.blogs.es/e09d4c/renta/840_560.jpeg",
    //         "publishedAt": "2024-03-01T10:00:54Z",
    //         "content": "Con el tercer mes de 2024 ya con nosotros, en breves tocará hacer balance económico del pasado año, lo cual nos indica que estamos a punto de comenzar la campaña de la Renta de 2023. Para tu tranquil… [+4800 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Phandroid - News for Android"
    //         },
    //         "author": "Tyler Lee",
    //         "title": "No iPhone support for the Samsung Galaxy Ring",
    //         "description": "Yea, it looks like Samsung has decided to snub iPhone users by not adding iPhone compatibility for the Galaxy Ring.\nThe post No iPhone support for the Samsung Galaxy Ring appeared first on Phandroid.",
    //         "url": "https://phandroid.com/2024/03/01/no-iphone-support-for-the-samsung-galaxy-ring/",
    //         "urlToImage": "https://phandroid.com/wp-content/uploads/2024/03/samsung-galaxy-ring.jpg",
    //         "publishedAt": "2024-03-01T11:10:46Z",
    //         "content": "The thing with Bluetooth devices is that theyre supposed to be platform agnostic. Basically, as long as your smartphone has Bluetooth, in theory it should work with any Bluetooth device. Of course, t… [+1095 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Phandroid - News for Android"
    //         },
    //         "author": "Tyler Lee",
    //         "title": "Motorola teases new smartphone with AI features",
    //         "description": "Motorola has teased the upcoming launch of it’s next smartphone where it will come with some new AI features.\nThe post Motorola teases new smartphone with AI features appeared first on Phandroid.",
    //         "url": "https://phandroid.com/2024/03/01/motorola-teases-new-smartphone-with-ai-features/",
    //         "urlToImage": "https://phandroid.com/wp-content/uploads/2023/08/motorola-razr-plus-9.jpg",
    //         "publishedAt": "2024-03-01T11:32:20Z",
    //         "content": "With smartphone hardware peaking, smartphone makers need to find new ways to impress. For 2024, we imagine that it will come in the form of AI. It looks like Motorola is getting ready to hop on the A… [+1083 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Presse-citron"
    //         },
    //         "author": "Presse-citron",
    //         "title": "Meilleur smartphone de l’année : le MWC a décerné le titre",
    //         "description": "Le salon de Barcelone est l'occasion, pour la plupart des constructeurs de smartphones sauf Apple, de présenter leurs appareils au grand public et aux journalistes, en conditions réelles.",
    //         "url": "https://www.presse-citron.net/meilleur-smartphone-de-lannee-le-mwc-a-decerne-le-titre/",
    //         "urlToImage": "https://www.presse-citron.net/app/uploads/2024/03/pixel-8.jpg",
    //         "publishedAt": "2024-03-01T11:00:25Z",
    //         "content": "Chaque année, le Mobile World Congress décerne le titre de meilleur smartphone à un mobile très apprécié du grand public. Et en février 2024, c’est l’excellent Google Pixel 8 qui a obtenu ce prix. Un… [+3989 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Pitchfork"
    //         },
    //         "author": "Matthew Strauss",
    //         "title": "Pharrell Williams and Miley Cyrus Share Video for New Song “Doctor (Work It Out)”: Watch",
    //         "description": "The track dates back to 2012, the musicians revealed in an interview with Zane Lowe on Apple Music 1",
    //         "url": "https://pitchfork.com/news/pharrell-williams-and-miley-cyrus-share-video-for-new-song-doctor-work-it-out-watch/",
    //         "urlToImage": "https://media.pitchfork.com/photos/65e162d55489f0447b2b56a2/16:9/w_1280,c_limit/Miley-Cyrus.jpg",
    //         "publishedAt": "2024-03-01T05:10:05Z",
    //         "content": "Its been a long time since Pharrell Williams and Miley Cyrus released a collaborative track, but the musicians have now reconnected for the new song Doctor (Work It Out). Watch the Jacob Bixenmandire… [+1296 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Pitchfork"
    //         },
    //         "author": "Jazz Monroe, Matthew Strauss",
    //         "title": "9 New Albums You Should Listen to Now: Mannequin Pussy, Schoolboy Q, Faye Webster, and More",
    //         "description": "Stream new releases from Mannequin Pussy, Schoolboy Q, Faye Webster, Yard Act, Amaro Freitas, That Mexican OT, Staś Czekalski, Ben Frost, and Lelo",
    //         "url": "https://pitchfork.com/news/9-new-albums-you-should-listen-to-now-mannequin-pussy-schoolboy-q-faye-webster/",
    //         "urlToImage": "https://media.pitchfork.com/photos/65e0c0b5ee1c14fa5907a7ad/16:9/w_1280,c_limit/Mannequin-Pussy.jpg",
    //         "publishedAt": "2024-03-01T14:18:46Z",
    //         "content": "Yard Act made an unlikely breakaway from the British crop of talky post-punks with 2022s The Overload, collaborating with Elton John (on the 100% Endurance rework) and crossing the Atlantic for late-… [+1181 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "XDA Developers"
    //         },
    //         "author": "Rahul Naskar",
    //         "title": "Windows 11 Insiders can now use their Android device as a webcam",
    //         "description": "Windows 11 finally allows you to use your phone as a webcam through the Phone Link app.",
    //         "url": "https://www.xda-developers.com/windows-11-turn-your-phone-camera-into-webcam/",
    //         "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/02/phone-link-1.png",
    //         "publishedAt": "2024-03-01T08:05:45Z",
    //         "content": "Key Takeaways\r\n<ul><li> Microsoft has released webcam capability for Windows Insiders to use Android phones as webcams, competing with Apple's Continuity Camera feature. </li><li> To set up the webca… [+2279 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The A.V. Club"
    //         },
    //         "author": "Saloni Gajjar",
    //         "title": "6 things you have to watch on TV this weekend",
    //         "description": "Welcome to the weekend edition of What’s On. Here are the big things happening on TV from Friday, March 1 to Sunday, March 3. All times are Eastern. [Note: The weekly edition of What’s On publishes on Sundays.]Read more...",
    //         "url": "https://www.avclub.com/whats-on-tv-march-1-to-3-spaceman-snl-napoleon-1851291572",
    //         "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/1d1b83047fa0ad73869cb1cf35cceff5.png",
    //         "publishedAt": "2024-03-01T12:00:00Z",
    //         "content": "Welcome to the weekend edition of Whats On. Here are the big things happening on TV from Friday, March 1 to Sunday, March 3. All times are Eastern. [Note: The weekly edition of Whats On publishes on … [+3130 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Golem.de"
    //         },
    //         "author": "Simon Krebs",
    //         "title": "Anzeige: Apple Macbook Pro mit M3 Pro jetzt mit 400 Euro Rabatt",
    //         "description": "Amazon reduziert aktuell wieder einige seiner Macbooks. Ein Modell mit dem aktuellen M3 Pro ist derzeit sogar um 400 Euro reduziert. (Macbook, Apple)",
    //         "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fanzeige-apple-macbook-pro-mit-m3-pro-jetzt-mit-400-euro-rabatt-2403-182779.html&referer=https%3A%2F%2Ft.co%2F89686975e0",
    //         "urlToImage": null,
    //         "publishedAt": "2024-03-01T13:13:02Z",
    //         "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka Android"
    //         },
    //         "author": "Iván Linares",
    //         "title": "Apple hace un Android en el iPhone con la subida de apps, pero se reserva un as en la manga que Google podría aprovechar",
    //         "description": "Hoy es el día: a partir de marzo Europa obligaba a Apple para que abriera los iPhone a la instalación de aplicaciones desde fuera de la App Store. Y ha cumplido: iOS 17.4 ya ofrece compatibilidad con otras tiendas de aplicaciones. Aunque eso sí, la estrategia…",
    //         "url": "https://www.xatakandroid.com/sistema-operativo/apple-hace-android-iphone-subida-apps-se-reserva-as-manga-que-google-podria-aprovechar",
    //         "urlToImage": "https://i.blogs.es/ce27c8/iphone-15-iphone-15-plus-4/840_560.jpeg",
    //         "publishedAt": "2024-03-01T14:00:55Z",
    //         "content": "Hoy es el día: a partir de marzo Europa obligaba a Apple para que abriera los iPhone a la instalación de aplicaciones desde fuera de la App Store. Y ha cumplido: iOS 17.4 ya ofrece compatibilidad con… [+4953 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "HYPEBEAST"
    //         },
    //         "author": "info@hypebeast.com (Hypebeast)",
    //         "title": "Best New Tracks: ScHoolboy Q, Miley Cyrus x Pharrell and More",
    //         "description": "As the week in music comes to a close, Hypebeast has rounded up the best projects for the latest installment of Best New Tracks.This week’s lineup is led by ScHoolboy Q and Miley Cyrus with Pharrell, who each delivered the album BLUE LIPS and the joint single…",
    //         "url": "https://hypebeast.com/2024/3/best-new-tracks-schoolboy-q-miley-cyrus-pharrell",
    //         "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F02%2Ftw-best-new-tracks-schoolboy-q-miley-cyrus-pharrell.jpg?w=1080&cbr=1&q=90&fit=max",
    //         "publishedAt": "2024-03-01T09:07:28Z",
    //         "content": "As the week in music comes to a close, Hypebeast has rounded up the best projects for the latest installment ofBest New Tracks.\r\nThis weeks lineup is led by ScHoolboy Q and Miley Cyrus with Pharrell,… [+4314 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "HYPEBEAST"
    //         },
    //         "author": "info@hypebeast.com (Hypebeast)",
    //         "title": "Miley Cyrus and Pharell Deliver Long-Awaited Collab \"Doctor (Work It Out)\"",
    //         "description": "Miley Cyrus and Pharrell reunited for the official release of \"Doctor (Work It Out).\"Clocking in at three minutes, the funky pop-rock joint is the perfect marriage between Cyrus' full-toned vocal prowess and Pharrell's sleek yet captivating production work. I…",
    //         "url": "https://hypebeast.com/2024/2/miley-cyrus-pharrell-doctor-work-it-out-single-stream",
    //         "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F02%2Fmiley-cyrus-pharrell-doctor-work-it-out-single-stream-tw.jpg?w=1080&cbr=1&q=90&fit=max",
    //         "publishedAt": "2024-03-01T05:20:53Z",
    //         "content": "Miley Cyrus and Pharrell reunited for the official release of “Doctor (Work It Out).”\r\nClocking in at three minutes, the funky pop-rock joint is the perfect marriage between Cyrus’ full-toned vocal p… [+615 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "HYPEBEAST"
    //         },
    //         "author": "info@hypebeast.com (Hypebeast)",
    //         "title": "ScHoolboy Q Is Back With 'BLUE LIPS,' His First Album in Five Years",
    //         "description": "After a five-year wait, ScHoolboy Q has dropped off his sixth studio effort BLUE LIPS.Clocking in at just under one hour, the 18-track record features guest appearances from Rico Nasty on \"Pop,\" Devin Malik on \"Back n Love\" and with Lance Skiiiwalker on \"Love…",
    //         "url": "https://hypebeast.com/2024/2/schoolboy-q-blue-lips-album-stream",
    //         "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F02%2Fschoolboy-q-blue-lips-album-stream-tw.jpg?w=1080&cbr=1&q=90&fit=max",
    //         "publishedAt": "2024-03-01T05:01:38Z",
    //         "content": "After a five-year wait, ScHoolboy Q has dropped off his sixth studio effort BLUE LIPS.\r\nClocking in at just under one hour, the 18-track record features guest appearances from Rico Nasty on “Pop,” De… [+1055 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Android Authority"
    //         },
    //         "author": "Aamir Siddiqui",
    //         "title": "Hypocrisy much? Google is silently blocking RCS on rooted Android phones and custom ROMs",
    //         "description": "Google Messages is blocking RCS messages from going through for root and custom ROM users, without any error messages. Read on to know more!",
    //         "url": "https://www.androidauthority.com/google-silently-blocking-rcs-rooted-android-phones-custom-roms-3421652/",
    //         "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2019/10/rcs-messages.jpg",
    //         "publishedAt": "2024-03-01T09:46:45Z",
    //         "content": "<ul><li>Users who have rooted their phone, have their bootloader unlocked or are using some custom ROMs report that their RCS messages are not being sent, even though RCS shows them as connected.</li… [+3646 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Android Authority"
    //         },
    //         "author": "Ankit Banerjee",
    //         "title": "Did you know: The biggest name in Android used to sell noodles",
    //         "description": "Samsung might be one of the biggest names in the tech space now, but the story of its humble origins may surprise you.",
    //         "url": "https://www.androidauthority.com/did-you-know-samsung-history-noodles-3420512/",
    //         "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/01/Samsung-logo-stock-photo-from-CES-2024-3.jpg",
    //         "publishedAt": "2024-03-01T14:00:47Z",
    //         "content": "Most major tech companies, like Facebook, Amazon, Apple, Microsoft, Google, and many others, have humble beginnings, founded in basements, garages, dorm rooms, or makeshift home offices. But while ma… [+4158 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Presse-citron"
    //         },
    //         "author": "Romain Vitt",
    //         "title": "Smartphone : face à Apple et Samsung, les constructeurs chinois misent sur l’ultra-premium",
    //         "description": "À Barcelone, les chinois Xiaomi et Honor ont dévoilé leurs nouveaux smartphones phares. Leur point commun : ils coûtent aussi cher que les derniers modèles de Samsung et Apple.",
    //         "url": "https://www.presse-citron.net/smartphone-face-a-apple-et-samsung-les-constructeurs-chinois-misent-sur-lultra-premium/",
    //         "urlToImage": "https://www.presse-citron.net/app/uploads/2023/02/mwc-honor.jpg",
    //         "publishedAt": "2024-03-01T05:32:54Z",
    //         "content": "Un jour avant l’ouverture des portes du MWC 2024, Barcelone était sous pavillon chinois. Le 25 février, Honor et Xiaomi organisaient deux conférences grandioses à quelques kilomètres de la Fira, ence… [+4356 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Presse-citron"
    //         },
    //         "author": "Presse-citron",
    //         "title": "Le successeur d’une des puces les plus puissantes est en route",
    //         "description": "Qualcomm va dévoiler le Snapdragon 8 Gen 4 en fin d'année. Voici tout ce que l'on sait (ou plutôt, ce que l'on suppose) de la nouvelle puce.",
    //         "url": "https://www.presse-citron.net/le-successeur-dune-des-puces-les-plus-puissantes-est-en-route/",
    //         "urlToImage": "https://www.presse-citron.net/app/uploads/2024/03/qualcomm.jpg",
    //         "publishedAt": "2024-03-01T12:00:11Z",
    //         "content": "C’est ce processeur qui sera probablement sous le capot de la majorité des smartphones haut de gamme dans un an. Le Snapdragon 8 Gen 4, succédant au Snapdragon 8 Gen 3, sera présenté par Qualcomm lor… [+4081 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "die-zeit",
    //             "name": "Die Zeit"
    //         },
    //         "author": "ZEIT ONLINE: News -",
    //         "title": "iPhones: Apple will Risiken durch alternative App-Stores minimieren",
    //         "description": "Hier finden Sie Informationen zu dem Thema „iPhones“. Lesen Sie jetzt „Apple will Risiken durch alternative App-Stores minimieren“.",
    //         "url": "https://www.zeit.de/news/2024-03/01/apple-will-risiken-durch-alternative-app-stores-minimieren",
    //         "urlToImage": "https://img.zeit.de/news/2024-03/01/apple-will-risiken-durch-alternative-app-stores-minimieren-image-group/wide__1300x731",
    //         "publishedAt": "2024-03-01T13:07:10Z",
    //         "content": "Apple wird nach der von der Europäischen Union erzwungenen Öffnung des App-Marktes für das iPhone auch Apps aus alternativen Marktplätzen auf elementare Sicherheitsrisiken prüfen. Das geht aus einem … [+3680 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Muyinteresante.com"
    //         },
    //         "author": "Alvaro Rodriguez",
    //         "title": "Renueva tu móvil por uno de estos 3 últimos modelos de gama alta con las ofertas de Choice Day de AliExpress",
    //         "description": "Aprovecha las grandes ofertas del Choice Day de AliExpress para cambiar tu móvil de gama alta a precios de gama media.",
    //         "url": "https://www.muyinteresante.com/bazar/63946.html",
    //         "urlToImage": "https://imagenes.muyinteresante.com/files/article_social_75/uploads/2024/03/01/65e1c329341c7.png",
    //         "publishedAt": "2024-03-01T11:30:00Z",
    //         "content": "Cada vez dudamos más entre elegir un móvil de gama media que satisfaga lo justo de nuestras necesidades o invertir en uno de gama alta con el que disfrutar de lo último en innovación tecnológica.\r\nPu… [+3059 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "iMore"
    //         },
    //         "author": "Tammy Rogers",
    //         "title": "Apple Watch Ultra with microLED display development might have been canceled",
    //         "description": "Display manufacturer ams Osram's stock has dropped by 40% after an unnamed firm pulls out of microLED deal — and that company could be Apple.",
    //         "url": "https://www.imore.com/health-fitness/apple-watch/apple-watch-ultra-with-microled-display-development-might-have-been-cancelled",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/AXHKBPwtPvfL5cidZfNdaC-1200-80.jpg",
    //         "publishedAt": "2024-03-01T10:27:45Z",
    //         "content": "The next Apple Watch Ultra might not get a microLED display after all, as it is thought that Apple has just pulled out of a massive deal with display maker ams Osram.\r\nIn an announcement from the dis… [+2087 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "iMore"
    //         },
    //         "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
    //         "title": "Buying an M3 iMac just got even cheaper — if you're willing to go with a refurbished model",
    //         "description": "You can now pick up a refurbished M3 iMac from the Apple Store and save around 15% off the price you'd pay for a new one.",
    //         "url": "https://www.imore.com/mac/imac/buying-an-m3-imac-just-got-even-cheaper-if-youre-willing-to-go-with-a-refurbished-model",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/F8FuTneoT6Cgz8tcJCNtkN-1200-80.jpeg",
    //         "publishedAt": "2024-03-01T08:00:14Z",
    //         "content": "Apple's refurbished store is often the place to be if you want to get your hands on one of the company's very best Macs while saving some money in the process. Apple very rarely offers direct discoun… [+3150 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "iMore"
    //         },
    //         "author": "oliver@monkeymanmedia.com (Oliver Haslam)",
    //         "title": "Here's exactly how big Apple's exciting new OLED iPad Pro will be, and it's likely to arrive soon",
    //         "description": "Apple is expected to announce a new OLED iPad Pro soon and new CAD drawings have shown off its dimensions ahead of time.",
    //         "url": "https://www.imore.com/ipad/ipad-pro/heres-exactly-how-big-apples-exciting-new-oled-ipad-pro-will-be-and-its-likely-to-arrive-soon",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/FTpBXvTNkDz8zaQfixGLKn-1200-80.jpg",
    //         "publishedAt": "2024-03-01T08:22:49Z",
    //         "content": "There have long been rumors that Apple intends to refresh its popular and powerful iPad Pro lineup with something new, a tablet that takes the current model and upgrades it in a way that will offer i… [+2932 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "iMore"
    //         },
    //         "author": "james.bentley@futurenet.com (James Bentley)",
    //         "title": "Even Amazon is throwing shade on iPhone FineWoven cases",
    //         "description": "If you go on the Amazon listing for Apple’s FineWoven case, you will see a notice letting you know about all the customers that have returned it. This is not a good sign.",
    //         "url": "https://www.imore.com/iphone/even-amazon-is-throwing-shade-on-iphone-finewoven-cases",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/UL6sVLBR3B9SfkcZhfW35M-1200-80.jpeg",
    //         "publishedAt": "2024-03-01T12:22:21Z",
    //         "content": "Though the idea of replacing leather cases is great in theory, Apple’s FineWoven case has been a bit of a hard sell ever since it launched last September. With it becoming the butt of many jokes, eve… [+1800 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "iMore"
    //         },
    //         "author": "john-anthony.disotto@futurenet.com (John-Anthony Disotto)",
    //         "title": "MacPaw announces its popular Setapp app store is coming to iOS — EU citizens can join the waitlist now",
    //         "description": "Setapp Mobile is coming to iOS users in the EU in April. Install a wide variety of applications through the third-party app store.",
    //         "url": "https://www.imore.com/apps/macpaw-announces-its-popular-setapp-app-store-is-coming-to-ios-eu-citizens-can-join-the-waitlist-now",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/SGfRueMrFKbRLXedWv5jbA-1200-80.jpg",
    //         "publishedAt": "2024-03-01T10:28:15Z",
    //         "content": "MacPaw’s Setapp Mobile is coming to iOS in April for iPhone users in the EU, allowing subscribers of the third-party app store to access a curated collection of apps.\r\nThe beta version of Setapp Mobi… [+2474 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "iMore"
    //         },
    //         "author": "Tammy Rogers",
    //         "title": "iVanky FusionDock Max 1 Review: The dock for professionals with Thunderbolt support",
    //         "description": "The iVanky FusionDock Max 1 is an absolute beast of a dock, and it comes with a price to match. But is it any good?",
    //         "url": "https://www.imore.com/mac/ivanky-fusiondock-max-1-review",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/2czAQK65gr67r9VszpjUZH-1200-80.jpg",
    //         "publishedAt": "2024-03-01T11:52:19Z",
    //         "content": "If you work on a Mac, you’ve likely found your MacBook, no matter the model, lacking in ports. Even the most high-end models only have four USB-C ports, an SD-Card reader, an HDMI port, and a headpho… [+8520 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "/FILM"
    //         },
    //         "author": "staff@slashfilm.com (Ryan Scott)",
    //         "title": "No One Talks About One Of The Best Sci-Fi Sequels Ever",
    //         "description": "Conquest of the Planet of the Apes deserves to be spoken about in the same conversations as Terminator 2, The Empire Strikes Back, and Aliens. Yes, really.",
    //         "url": "https://www.slashfilm.com/1529837/one-of-best-sci-fi-sequels-ever-conquest-of-the-planet-of-the-apes/",
    //         "urlToImage": "https://www.slashfilm.com/img/gallery/no-one-talks-about-one-of-the-best-sci-fi-sequels-ever/l-intro-1709244929.jpg",
    //         "publishedAt": "2024-03-01T00:00:19Z",
    //         "content": "I am going to bat for the extended version, which can be found on Blu-ray. I understand in the age of streaming that watching a film on physical media might be a big ask, but in my mind, it is well w… [+1731 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Vox"
    //         },
    //         "author": "Vox Communications",
    //         "title": "Julia Longoria Joins Vox to Develop and Host New Podcast",
    //         "description": "Longoria has spent her career reporting, producing, and hosting some of the most critically acclaimed audio documentaries.",
    //         "url": "https://www.vox.com/2024/3/1/24087064/julia-longoria-joins-vox-to-develop-and-host-new-podcast",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/E1bhfKPFwfvnVixJWXn2cmH0KDc=/0x134:1860x1108/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25312115/IMG_0082__1_.jpeg",
    //         "publishedAt": "2024-03-01T14:00:00Z",
    //         "content": "Longoria has spent her career reporting, producing, and hosting some of the most critically acclaimed audio documentaries. Vox editor-in-chief Swati Sharma and managing editor Natalie Jennings announ… [+1619 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Vida Extra"
    //         },
    //         "author": "Sergio Cejas (Beld)",
    //         "title": "Experimentos con convictos en una cárcel espacial en esta sorprendente y perturbadora película de ciencia ficción. Se llama High Life y está en streaming",
    //         "description": "No todas las películas de ciencia ficción o ambientadas en el espacio tienen por qué ser de acción. También se puede apostar por producir largometraje en el que predomine el drama, el misterio y los momentos de tensión. Una serie de elementos de los que hace …",
    //         "url": "https://www.vidaextra.com/cine/experimentos-convictos-carcel-espacial-esta-sorprendente-perturbadora-pelicula-ciencia-ficcion-se-llama-high-life-esta-streaming",
    //         "urlToImage": "https://i.blogs.es/73161c/high-life/840_560.jpeg",
    //         "publishedAt": "2024-03-01T08:00:55Z",
    //         "content": "No todas las películas de ciencia ficción o ambientadas en el espacio tienen por qué ser de acción. También se puede apostar por producir largometraje en el que predomine el drama, el misterio y los … [+2512 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MacRumors"
    //         },
    //         "author": "Hartley Charlton",
    //         "title": "Apple TV+ Gains Over 50 Movies for a Limited Time",
    //         "description": "Apple TV+ today gained over 50 movies, adding to its back catalog of content for a limited time.\n\n\n\n\n\nThe collection includes a large number of popular and classic titles. Subscribers can access the movies in a \"Great Movies on Apple TV+\" section in the Apple…",
    //         "url": "https://www.macrumors.com/2024/03/01/apple-tv-gains-over-50-movies-for-a-limited-time/",
    //         "urlToImage": "https://images.macrumors.com/t/EPAYyPb_GaBjpEfuKN3dGnTLPTE=/1600x/article-new/2021/08/apple-tv-plus-banner.jpg",
    //         "publishedAt": "2024-03-01T14:29:06Z",
    //         "content": "Apple TV+ today gained over 50 movies, adding to its back catalog of content for a limited time.\r\nThe collection includes a large number of popular and classic titles. Subscribers can access the movi… [+1830 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MacRumors"
    //         },
    //         "author": "Hartley Charlton",
    //         "title": "Chip Details of 16 Upcoming Apple Devices Revealed",
    //         "description": "The chip details of 16 new Apple devices have been discovered, according to technical information posted on X earlier today by a private account with a proven track record of sharing accurate information about Apple's plans.\n\n\n\n\n\nEight unreleased Apple device…",
    //         "url": "https://www.macrumors.com/2024/03/01/chip-details-of-16-upcoming-apple-devices-revealed/",
    //         "urlToImage": "https://images.macrumors.com/t/IVZhzM2GRs4phrpsKPH_q1To7UI=/1920x/article-new/2020/10/Apple-Silicon-Teal-Feature.jpg",
    //         "publishedAt": "2024-03-01T13:40:40Z",
    //         "content": "The chip details of 16 new Apple devices have been discovered, according to technical information posted on X earlier today by a private account with a proven track record of sharing accurate informa… [+2670 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Les Numériques"
    //         },
    //         "author": "Rick",
    //         "title": "Actualité : Bon plan – Le smartphone Apple iPhone 15 Pro 128 Go \"5 étoiles\" à 1 096,90 €",
    //         "description": "Le smartphone Apple iPhone 15 Pro 128 Go passe sous les 1100 € chez E. Leclerc - High-Tech. C'est actuellement l'un des meilleurs produit de notre comparatif.",
    //         "url": "https://www.lesnumeriques.com/telephone-portable/bon-plan-le-smartphone-apple-iphone-15-pro-128-go-5-etoiles-a-1-096-90-n219042.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/213604/04069324-iphone-15-pro-il-est-libre-du-max__1200_630__overflow.jpg",
    //         "publishedAt": "2024-03-01T07:14:02Z",
    //         "content": "Modèle concernéCe contenu porte spécifiquement sur le modèle : 128 Go. D'autres déclinaisons existent et leurs prix sont indiqués dans les onglets du tableau ci-dessous.\r\nLe plus petit des Pro est ce… [+1766 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Les Numériques"
    //         },
    //         "author": "lesnums",
    //         "title": "Top bon plan : Philips, XGIMI, Apple... les meilleurs bons plans du 01/03/2024",
    //         "description": "Nous publions chaque jour une vingtaine de bons plans. Pour vous faciliter la tâche, voici les meilleurs bons plans, selon nous les incontournables parmi les plus belles promos du jour",
    //         "url": "https://www.lesnumeriques.com/societe-numerique/philips-xgimi-apple-les-meilleurs-bons-plans-du-01-03-2024-n219044.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/news/18/188269/9e96ef1c-top-5-nvidia-rtx-jabra-samsung-les-meilleurs-bons-plans-du-jour_png__1200_630__overflow.jpg",
    //         "publishedAt": "2024-03-01T06:00:00Z",
    //         "content": "Faisant partie de la nouvelle collection de rasoirs/tondeuses Philips, la tondeuse multi-usage 14-en-1 MG7720/15 MultiGroom Series 7000 sadresse à ceux qui ont déjà une expérience en rasage, mais sou… [+1091 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xatakamovil.com"
    //         },
    //         "author": "Iván Ramírez",
    //         "title": "Apple acepta el sideloading de iOS a regañadientes, pero mantiene un control férreo sobre las tiendas de apps de terceros",
    //         "description": "En una de las notas de prensa más largas de tecnología de los últimos tiempos, Apple ha anunciado una serie de iniciativas de seguridad complementarias a la llegada del sideloading a iOS, pero no porque quiera. De hecho, si algo ha quedado claro es que no ha …",
    //         "url": "https://www.xatakamovil.com/apple/apple-acepta-sideloading-ios-a-reganadientes-mantiene-control-ferreo-tiendas-apps-terceros",
    //         "urlToImage": "https://i.blogs.es/7fdf13/apple/840_560.jpeg",
    //         "publishedAt": "2024-03-01T12:00:56Z",
    //         "content": "En una de las notas de prensa más largas de tecnología de los últimos tiempos, Apple ha anunciado una serie de iniciativas de seguridad complementarias a la llegada del sideloading a iOS, pero no por… [+5616 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xatakamovil.com"
    //         },
    //         "author": "Pepu Ricca",
    //         "title": "El sideloading es oficial en el iPhone desde hoy: Apple abre la puerta de los móviles, aunque con serias dificultades",
    //         "description": "Era un secreto a voces. El hermetismo que ha caracterizado a Apple se nota en cada rincón de su sistema operativo para móviles, iOS, que despúes de más de una década sucumbe antes las obligaciones impuestas por la Unión Europea en el viejo continente: permiti…",
    //         "url": "https://www.xatakamovil.com/apple/sideloading-oficial-iphone-hoy-apple-abre-puerta-moviles-serias-dificultades",
    //         "urlToImage": "https://i.blogs.es/05d9d0/original/840_560.jpeg",
    //         "publishedAt": "2024-03-01T12:00:56Z",
    //         "content": "Era un secreto a voces. El hermetismo que ha caracterizado a Apple se nota en cada rincón de su sistema operativo para móviles, iOS, que despúes de más de una década sucumbe antes las obligaciones im… [+3219 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xatakamovil.com"
    //         },
    //         "author": "Fran León",
    //         "title": "MediaMarkt quiere que tengas el reciente Galaxy S24 y te puedas ahorrar 60 euros en su compra",
    //         "description": "Samsung presentó hace poco la nueva generación del Galaxy, el Samsung Galaxy S24. Ahora, ya es posible encontrarlo más barato que tras su reciente lanzamiento. Por ejemplo, en MediaMarkt, puedes conseguirlo durante la Semana Web en oferta, por 909 euros.\n<!--…",
    //         "url": "https://www.xatakamovil.com/ofertas/mediamarkt-quiere-que-tengas-reciente-galaxy-s24-te-puedas-ahorrar-60-euros-su-compra",
    //         "urlToImage": "https://i.blogs.es/e3ff17/ofertas_cpa_v3-copia-79-/840_560.jpeg",
    //         "publishedAt": "2024-03-01T14:30:55Z",
    //         "content": "Samsung presentó hace poco la nueva generación del Galaxy, el Samsung Galaxy S24. Ahora, ya es posible encontrarlo más barato que tras su reciente lanzamiento. Por ejemplo, en MediaMarkt, puedes cons… [+1643 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Playpcesor.com"
    //         },
    //         "author": "Esor Huang",
    //         "title": "如何為筆記命名，建立搜尋規則？我的標題、分類、標籤命名法",
    //         "description": "傳統的筆記方法，希望筆記出現在準確又固定的位置，但往往筆記一多就變得不好管理，管理不好則讓找到資料變得更加困難。但是在數位筆記的世界，筆記不一定有固定位置，反而可以更有彈性的在各種不同需求情境中出現，只要需要時搜尋得到，其實就代表整理完成。 搜尋，是更好的整理，而這就和如何命名...",
    //         "url": "https://www.playpcesor.com/2024/03/note-tag-name.html",
    //         "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEiOwyu1FZYqt3jNz-ERYIpDkc9WXtfS3iqJK0KZyJk-9jZhXkVLAFE_QEP125EK7n_7jHOziVIvw5-gKLXTNyszwsihoCIGdMKvvGmdECnNqmFcxhKTMzwZs1EZWHx6sNScuFCb7H4M9OY4MBPbX-f7_LiDWdbCXvapmm2RX8kOsCTIafCDM-vW4g=w1200-h630-p-k-no-nu",
    //         "publishedAt": "2024-03-01T02:56:00Z",
    //         "content": "傳統的筆記方法，希望筆記出現在準確又固定的位置，但往往筆記一多就變得不好管理，管理不好則讓找到資料變得更加困難。但是在數位筆記的世界，筆記不一定有固定位置，反而可以更有彈性的在各種不同需求情境中出現，只要需要時搜尋得到，其實就代表整理完成。搜尋，是更好的整理，而這就和如何命名筆記標題，有很大的關係。\r\n但也正是因為在撰寫筆記時，我們經常隨意地用日期和臨時想到的關鍵字作為標題，這種做法最終往往會使… [+6891 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Frandroid"
    //         },
    //         "author": "Hugo Bernard",
    //         "title": "iPhone : comment Apple va quand même garder la main sur les concurrents de l’App Store",
    //         "description": "Apple s'apprête à effectuer des changements sur iOS, notamment pour les applications qui seront téléchargées en dehors de l'App Store. L'entreprise prévoit de les vérifier quand même, mais prévient : elles seront moins sécurisées que celles de son magasin d'a…",
    //         "url": "https://www.frandroid.com/marques/apple/1953844_iphone-comment-apple-va-quand-meme-garder-la-main-sur-les-concurrents-de-lapp-store",
    //         "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/10/apple-iphone-15-32-ios-scaled.jpg",
    //         "publishedAt": "2024-03-01T12:00:16Z",
    //         "content": "Apple s'apprête à effectuer des changements sur iOS, notamment pour les applications qui seront téléchargées en dehors de l'App Store. L'entreprise prévoit de les vérifier quand même, mais prévient :… [+6551 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Frandroid"
    //         },
    //         "author": "Nathan Le Gohlisse",
    //         "title": "Windows 11 copie enfin cette fonctionnalité très pratique de macOS",
    //         "description": "Microsoft a annoncé déployer graduellement chez les Insiders une fonctionnalité permettant d'utiliser un smartphone Android en guise de Webcam pour un PC sous Windows 11. Une fonction déjà disponible avec macOS et un iPhone.",
    //         "url": "https://www.frandroid.com/marques/microsoft/1953576_windows-11-copie-enfin-cette-fonctionnalite-tres-pratique-de-macos",
    //         "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/02/windows-11-pub-microsoft.jpeg",
    //         "publishedAt": "2024-03-01T08:47:32Z",
    //         "content": "Microsoft a annoncé déployer graduellement chez les Insiders une fonctionnalité permettant d'utiliser un smartphone Android en guise de Webcam pour un PC sous Windows 11. Une fonction déjà disponible… [+2488 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Frandroid"
    //         },
    //         "author": "Marie Lizak",
    //         "title": "Cette voiture électrique abordable pourrait faire un carton en Europe en attendant le Defender",
    //         "description": "Le constructeur chinois Chery vient d'annoncer le lancement de son SUV électrique, le iCAR 03. Déjà dévoilé quelques mois plus tôt, ce dernier arrive enfin sur le marché à un prix très intéressant. De quoi lui promettre un beau succès en Europe ?",
    //         "url": "https://www.frandroid.com/survoltes/voitures-electriques/1953672_cette-voiture-electrique-abordable-pourrait-faire-un-carton-en-europe-en-attendant-le-defender",
    //         "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/03/une-fille-au-volant-9.jpg",
    //         "publishedAt": "2024-03-01T09:09:28Z",
    //         "content": "Le constructeur chinois Chery vient d'annoncer le lancement de son SUV électrique, le iCAR 03. Déjà dévoilé quelques mois plus tôt, ce dernier arrive enfin sur le marché à un prix très intéressant. D… [+4181 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Frandroid"
    //         },
    //         "author": "Humanoid Content",
    //         "title": "Anniversaire d’AliExpress : voici comment bien se préparer pour obtenir les meilleurs prix [Sponso]",
    //         "description": "AliExpress s’apprête à fêter ses 14 ans. Si la plateforme d’e-commerce n’est plus à présenter, avec ses prix ultra-compétitifs et son large catalogue de produits tech, quelques astuces sont à connaître pour profiter des tarifs les plus avantageux.",
    //         "url": "https://www.frandroid.com/marques/google/1948902_anniversaire-daliexpress-voici-comment-bien-se-preparer-pour-obtenir-les-meilleurs-prix",
    //         "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/02/numerama-illustration-of-an-aniversary-balloon-14-years-old-edc4e2ec-634d-446c-b723-848e17c9cf25.jpg",
    //         "publishedAt": "2024-03-01T10:24:30Z",
    //         "content": "AliExpress sapprête à fêter ses 14 ans. Si la plateforme de-commerce nest plus à présenter, avec ses prix ultra-compétitifs et son large catalogue de produits tech, quelques astuces sont à connaître … [+6924 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Lifehacker.ru"
    //         },
    //         "author": "Макс Вильтовский",
    //         "title": "Названы модели iPhone, на которые предпочитают переходить пользователи Android",
    //         "description": "«Миграция» на iOS довольно активная.",
    //         "url": "https://lifehacker.ru/populyarnye-iphone-u-polzovatelej-android/",
    //         "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2024/03/image-1_1709297608-1024x512.png",
    //         "publishedAt": "2024-03-01T13:20:52Z",
    //         "content": "Android, iPhone, : , . Consumer Intelligence Research Partners (CIRP).\r\n , 15% Apple Android. , 2023 51% iPhone 14, 29% iPhone SE, iPhone 12iPhone 13. 21% iPhone 15.  , , «» .\r\n iPhone 2023 iOS Andro… [+63 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Lifehacker.ru"
    //         },
    //         "author": "Дарья Бакина",
    //         "title": "Подкаст «Повар варит ти»: canvas — холст, easel — мольберт, brush — кисть",
    //         "description": "В этом эпизоде запомнить новые английские слова помогут Кен, антикварная лавка и скидка 99%.",
    //         "url": "https://lifehacker.ru/povar-varit-ti-85/",
    //         "urlToImage": "https://cdn.lifehacker.ru/wp-content/uploads/2023/06/LX-saJt-LX_1687507325-1024x512.jpg",
    //         "publishedAt": "2024-03-01T12:30:56Z",
    //         "content": "« » , , . , . .\r\n : canvas , easel , brush .\r\n , .\r\n « » , : Apple Podcasts, YouTube, «», «VK », «», SoundStream, Red Basset ."
    //     },
    //     {
    //         "source": {
    //             "id": "lenta",
    //             "name": "Lenta"
    //         },
    //         "author": "Андрей Ставицкий",
    //         "title": "Стало известно о планах Apple купить Tesla",
    //         "description": "Корпорация Apple рассматривала возможность приобретения автомобильной компании Tesla. По информации источников, корпорация Тима Кука рассматривала такой вариант в тот момент, когда компания планировала начать разработку электрокара. Однако руководство IT-гига…",
    //         "url": "https://lenta.ru/news/2024/03/01/tesla-apple/",
    //         "urlToImage": "https://icdn.lenta.ru/images/2024/02/29/12/20240229121639744/share_fcc58ee1403fb3ddcc631317b9b59bc0.jpg",
    //         "publishedAt": "2024-03-01T06:01:40Z",
    //         "content": "AppleTesla. The New York Times (NYT).\r\n , , . - Apple , , . IT- , .\r\n , Apple . Tesla , Apple , Siri. , Apple , Siri , .\r\n , 2022 , Tesla Apple. , .\r\n Bloomberg , Apple 10 . ()."
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ifanr.com"
    //         },
    //         "author": "肖凡博",
    //         "title": "Vision Pro 美国市场需求已大幅放缓/小米汽车回应 SU7 出厂价 20 万元/iPhone 15 系列已降至历史最低价",
    //         "description": "·特斯拉申请赛博中文商标\n·高合开放员工快速离职通道\n·Adobe 发布全新音乐制作生成式 AI#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
    //         "url": "https://www.ifanr.com/1576688",
    //         "urlToImage": "https://s3.ifanr.com/images/ep/cover-images/re_xue_cover.jpg",
    //         "publishedAt": "2024-03-01T00:20:43Z",
    //         "content": "AI \r\n OpenAI \r\nVision Pro \r\n 2023 Q4 \r\nMeta \r\nAdobe AI\r\n 20 \r\n 2 \r\nMeta 7 LLAMA 3\r\n 21 Pro AI \r\niPhone 15 \r\nGTA 6 \r\n× PUMA Suede \r\n 365 \r\n 2\r\n 4\r\nCEO AI \r\nCEO ·Tim Cook 2024 \r\n iOS 18 AI Siri Spotlig… [+1190 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Quartz India"
    //         },
    //         "author": "Matt Novak / Gizmodo",
    //         "title": "Amazon hit a fancy iPhone case with a 'frequently returned' warning",
    //         "description": "Apple’s Finewoven case for the iPhone 15 has received so many returns that Amazon has started putting a warning label on the product. What, exactly, is the issue? Many people are complaining it’s uncomfortable to hold and scratches easily.Read more...",
    //         "url": "https://qz.com/apple-finewoven-iphone-case-amazone-frequently-returned-1851300095",
    //         "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/5e7d9b088b0ad8f4fd760a8dbc43c543.jpg",
    //         "publishedAt": "2024-03-01T13:38:05Z",
    //         "content": "Apples Finewoven case for the iPhone 15 has received so many returns that Amazon has started putting a warning label on the product. What, exactly, is the issue? Many people are complaining its uncom… [+1432 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Quartz India"
    //         },
    //         "author": "Angela L. Pagán / The Takeout",
    //         "title": "Panera’s big menu overhaul comes with lower prices",
    //         "description": "Panera Bread has just announced a “new era” for itself, and with that comes a complete overhaul of its menu. By April 4, the bakery cafe chain restaurant with roughly 2,000 locations will be eliminating some of its current offerings, introducing nine new item…",
    //         "url": "https://qz.com/panera-new-menu-lower-prices-1851300123",
    //         "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/71def89cd72f2e66a34b3dd94fbcf852.jpg",
    //         "publishedAt": "2024-03-01T13:41:00Z",
    //         "content": "Panera Bread has just announced a new era for itself, and with that comes a complete overhaul of its menu. By April 4, the bakery cafe chain restaurant with roughly 2,000 locations will be eliminatin… [+4793 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "01net.com"
    //         },
    //         "author": "Mickaël Bazoge",
    //         "title": "L’Apple Watch Ultra pourrait garder son écran OLED encore un moment",
    //         "description": "Finalement, les futures Apple Watch Ultra pourraient se contenter d'un écran OLED, comme les deux précédentes générations. Une rumeur pourtant tenace annonçait l'intégration d'un écran microLED encore plus lumineux dès 2025… mais le projet serait tombé à l'ea…",
    //         "url": "https://www.01net.com/actualites/lapple-watch-ultra-pourrait-garder-son-ecran-oled-encore-un-moment.html",
    //         "urlToImage": "https://www.01net.com/app/uploads/2022/09/Apple-Watch-Ultra_49.jpg",
    //         "publishedAt": "2024-03-01T07:04:27Z",
    //         "content": "Finalement, les futures Apple Watch Ultra pourraient se contenter d’un écran OLED, comme les deux précédentes générations. Une rumeur pourtant tenace annonçait l’intégration d’un écran microLED encor… [+1876 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Variety"
    //         },
    //         "author": "Naman Ramachandran",
    //         "title": "Shah Rukh Khan’s ‘Pathaan’ Studio Yash Raj Films Launches Casting App (EXCLUSIVE)",
    //         "description": "Bollywood aspirants the world over wanting to feature alongside top Indian stars can now cut out the middleman. Leading Indian studio Yash Raj Films (YRF), the outfit behind Shah Rukh Khan, Deepika Padukone starrer “Pathaan,” and “Tiger 3,” led by Salman Khan…",
    //         "url": "https://variety.com/2024/film/asia/yash-raj-films-casting-app-shah-rukh-khan-pathaan-1235926891/",
    //         "urlToImage": "https://variety.com/wp-content/uploads/2024/02/YRF-Casting-Pathaan.jpg?w=1000&h=563&crop=1",
    //         "publishedAt": "2024-03-01T05:30:00Z",
    //         "content": "Bollywood aspirants the world over wanting to feature alongside top Indian stars can now cut out the middleman.\r\nLeading Indian studio Yash Raj Films (YRF), the outfit behind Shah Rukh Khan, Deepika … [+2141 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Osxdaily.com"
    //         },
    //         "author": "Jamie Cuevas",
    //         "title": "Apple Cancels the Apple Car Project",
    //         "description": "Apple has canceled their ambitious decade-long car project, codenamed Project Titan, according to a report from Bloomberg. Development on the Apple Car, which was apparently intended to be an electric vehicle with self-driving capabilities, became news in 201…",
    //         "url": "https://osxdaily.com/2024/03/01/apple-cancels-the-apple-car-project/",
    //         "urlToImage": "https://cdn.osxdaily.com/wp-content/uploads/2024/02/apple-car-canceled-render-concept.jpeg",
    //         "publishedAt": "2024-03-01T14:22:40Z",
    //         "content": "Apple has canceled their ambitious decade-long car project, codenamed Project Titan, according to a report from Bloomberg. \r\nDevelopment on the Apple Car, which was apparently intended to be an elect… [+3105 chars]"
    //     }
    // ]
    static defaultProps = {
      country: 'in',
      category: 'general',
      totalres: 0
    }
    static defaultPropTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

    capitalizeFirstLetter=(string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

    constructor(props){
        super(props);
        console.log("constructor");
        this.state= {articles: [], page:1, loading:true}

        document.title=`NewsMonkey | ${this.capitalizeFirstLetter(this.props.category)}`
    }

    async update(){
      this.props.setProg(10);
        this.setState({loading: true})
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        this.props.setProg(30);
        let parsedata= await data.json()
        this.props.setProg(70);
        console.log(parsedata);
        this.setState({articles: parsedata.articles, totalres: parsedata.totalResults, loading: false}, ()=>{console.log("updated");});
        this.props.setProg(100);
    }

    async componentDidMount(){
        // this.setState({loading: true})
        // console.log("start");
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        // let data=await fetch(url);
        // let parsedata= await data.json()
        // console.log(parsedata);
        // this.setState({articles: parsedata.articles, totalres: parsedata.totalResults, loading: false}, ()=>{console.log("updated");});
        this.update();
    }

    // handleNext=async()=>{
    //   this.setState({page:this.state.page +1});
    //   this.update();

    // }

    // handlePrev=async()=>{
    //   this.setState({page:this.state.page -1});
    //   this.update();
    // }
    fetchMoreData = async() => {
      this.setState({page:this.state.page+1});
      // this.update();
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedata= await data.json()
      console.log(parsedata);
      this.setState({articles: this.state.articles.concat(parsedata.articles), totalres: parsedata.totalResults}, ()=>{console.log("updated");});

        

    };

  render() {
    return (
      <div>
        <h2 className='text-center'>NewsMonkey | Top Headlines | {this.capitalizeFirstLetter(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalres}
          loader={<h4>Loading...</h4>}
        > */}
        <div className='container my-3'>
        <div className="row">
        {this.state.articles?.map((element)=>{
            // console.log(element);
            return <div className="col-md-4 my-2" key={element.url}>
            <NewsItem title={element.title.length>45?element.title.slice(0,45):element.title} description={element.description&&element.description.length>88?element.description.slice(0,88):element.description} 
            img={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
        })}     
        </div>
        </div>
        {/* </InfiniteScroll> */}
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrev}> &larr; Prev</button>
        <button  disabled={this.state.page+1>Math.ceil(this.state.totalres/this.props.pageSize)}  type="button" class="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
        </div>
    )
  }
}
export default News
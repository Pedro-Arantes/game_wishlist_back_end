import prisma from "../src/database/db.js";

async function main(){

    await prisma.users.createMany({
        data: [
            {
                name: "Test",
                email: "test@gmail.com",
                password: "teste",
                cpf: "11111111111"
            }
        ]
    })

    await prisma.games.createMany({
        data: [
            {
                name: "Mortal Kombat",
                platform: "Ps4",
                image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/78a4cd77592993.5c929564727af.jpg",
                genre: "Luta"
            },
            {
                name: "MineCraft",
                platform: "Pc",
                image: "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
                genre: "Sandbox",
            },
            {
                name: "League of Legends",
                image: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LoL_1200x1600-15ad6c981af8d98f50e833eac7843986",
                platform: "Pc",
                genre: "Moba"
            },
            {
                name: "Hades",
                image: "https://cdn1.epicgames.com/min/offer/1200x1600-1200x1600-e92fa6b99bb20c9edee19c361b8853b9.jpg",
                platform: "Pc",
                genre: "Roguelike"
            },
            {
                name: "Halo Infinite",
                image: "https://s2.glbimg.com/hgj24eLzTOm5WcMh2gsJWPYibEU=/0x7:770x979/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/q/f/4xh4idQlWaQeyAhyDitQ/halo-infinite-capa-xbox-series-x.png",
                platform: "XBOXONE",
                genre: "Fps"
            }
        ]
    })

    await prisma.grades.createMany({
        data:[
            {
                game_id: 3,
                user_id: 1,
                grade: 10
            }
        ]
    })
    await prisma.profPictures.createMany({
        data:[
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_venonat-256.png"
            },
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_pikachu-256.png"
            },
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_jigglypuff-256.png"
            },
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_squirtle-256.png"
            },
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_charmander-256.png"
            },
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_bulbasaur-256.png"
            },
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_mew-256.png"
            },
            {
                picture:"https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-2/135/_snorlax-256.png"
            }
        ]
    })
    await prisma.comments.createMany({
        data:[
            {
                text:"É bom mais não joguem",
                user_id:1,
                game_id:3
            }
        ]
    })
}

main()
    .then(()=>{
        console.log("Registros Inseridos com Sucesso!");
    })
    .catch(e =>{
        console.error(e);
        process.exit(1);
    })
    .finally(async () =>{
        await prisma.$disconnect();
    })
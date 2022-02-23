const videoList = [
  {
    id: 1,
    author: '@midudev',
    text: 'TOP 5 TEMAS DE VISUAL STUDIO CODE #frontend #techtok #programacion #desarrolloweb',
    likes: 10,
    comments: 3,
    shares: 5,
    video: {
      src: 'https://v16-webapp.tiktok.com/028a75450830f1b414f1e8d9894f4ec6/621713ce/video/tos/useast2a/tos-useast2a-ve-0068c001/046453a013c44c3a9640327d49e4f952/?a=1988&br=2098&bt=1049&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThNavUDXq&l=2022022323121001022311707904314D3F&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anhlPDs6ZmVzOjMzNzczM0ApMzlmPDQ5NTw0N2dnPDdoNGdybnJhcjQwYWhgLS1kMTZzczBgLTM0LTExYC8zYF40MS06Yw%3D%3D&vl=&vr=',
      poster: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d0c78da5669a49c6a3272269608404b4_1642699339?x-expires=1645678800&x-signature=jOGXauDLYTWvMxNc4VfRa9FjTGg%3D'
    },
    album: {
      title: 'She Share Story (for Vlog) - 山口夕依',
      cover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/be3c979febc847e7ab7fffb8956d8964~c5_200x200.jpeg'
    }
  },
  {
    id: 2,
    author: '@midudev',
    text: 'La inteligencia artificial no te va a quitar el trabajo. En todo caso, te va a ayudar a no hacer tareas tediosas. #frontend #javascript #programacion',
    likes: 10,
    comments: 3,
    shares: 5,
    video: {
      src: 'https://v16-webapp.tiktok.com/cc16ad0670a436072cd2b88d6d34bf0a/6216f202/video/tos/useast2a/tos-useast2a-ve-0068c003/25ca3f1b09ac481d85a960384e2bbaf4/?a=1988&br=1084&bt=542&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThdJoUDXq&l=2022022320473401019103203900191519&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2l3bzc6Zng4OzMzNzczM0ApOTM6MzY3ODtpN2ZpaTo3aGctZmg2cjRfZV9gLS1kMTZzczMzXy8vNS8tY14uXy0zNjU6Yw%3D%3D&vl=&vr=',
      poster: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ba60bc2b9afd4715bf07ca41e75a737e_1645631754?x-expires=1645668000&x-signature=HN%2F2z%2FA%2BDXT6H0cf4YFk7JXQ5mQ%3D'
    },
    album: {
      title: 'Sonido original - Miguel 👨‍💻 Programador Web',
      cover: 'https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1667525916840965~c5_720x720.jpeg?x-expires=1645740000&x-signature=t%2BhL2Jy1j3qbG26AOYNARIw1NgE%3D'
    }
  },
  {
    id: 3,
    author: '@midudev',
    text: '🔥 SUPER extensión de Visual Studio Code para mejorar cómo se muestran los errores de programación #techtok #vscode #javascript',
    likes: '14.5K',
    comments: 99,
    shares: 486,
    video: {
      src: 'https://v16-webapp.tiktok.com/c83fc672281104bb3f9d2298fdf03edb/62170754/video/tos/useast2a/tos-useast2a-ve-0068c001/c472e3a6695a45d3b9b7b8a26f50da13/?a=1988&br=1340&bt=670&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThO2vUDXq&l=20220223221912010223073049132FA3C9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am94bjg6ZjNsOzMzNzgzM0ApOjM3OTVpMzs2N2kzNmc7NWcxMV9scjRnNDNgLS1kLzZzczAzYy4uLTFhXjMzMGItNjM6Yw%3D%3D&vl=&vr=',
      poster: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/c5f351ebcfde4f94be05184015849ef2_1645028324?x-expires=1645675200&x-signature=eRoO6%2Bti%2B5%2F6ZUYOkLHWX3ztd7w%3D'
    },
    album: {
      title: 'Sonido original - Miguel 👨‍💻 Programador Web',
      cover: 'https://p77-sign-va.tiktokcdn.com/musically-maliva-obj/1667525916840965~c5_720x720.jpeg?x-expires=1645740000&x-signature=t%2BhL2Jy1j3qbG26AOYNARIw1NgE%3D'
    }
  },
  {
    id: 4,
    author: '@midudev',
    text: 'Descubre los salarios base para programadores en las grandes tecnológicas. #techtok',
    likes: 440,
    comments: 20,
    shares: 9,
    video: {
      src: 'https://v16-webapp.tiktok.com/3875e413a7bf6074b05bbd157b607afb/621712dd/video/tos/useast2a/tos-useast2a-pve-0068/eb4cd9cfb6c744aeba0a0227be450707/?a=1988&br=2126&bt=1063&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3APnz7ThyBvUDXq&l=2022022323082001019105502913323CF1&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajhqa2g6ZnN4OzMzNzczM0ApNjo3NWQ2OTw5NzwzZGk6ZGdwLTUvcjRnLS5gLS1kMTZzcy4xMTJhMGBjMV8uMzVeLjE6Yw%3D%3D&vl=&vr=',
      poster: 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/a9003a9d2c104140853fc8daeed03bb1_1644421736?x-expires=1645678800&x-signature=lnb%2BeMKFjfasETztn78VcEMVMrY%3D'
    },
    album: {
      title: 'Surrender - Natalie Taylor',
      cover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/cdcee416fcc94111a49bbf23019986c4~c5_200x200.jpeg'
    }
  }
]

export default videoList

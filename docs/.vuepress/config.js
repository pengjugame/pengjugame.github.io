module.exports = {
    title: 'Pengju.li\'s blog',
    description: '大丈夫当朝游碧海而暮苍梧',
    plugins: ['autobar'],
    themeConfig: {
      nav: [
         // 显示下拉列表
         {
          text: '技术积累',
          items: [
            {
              text: '操作系统',
              items: [
                { text: 'linux', link: '/开发技能/Linux/' },
                { text: 'MacOSX', link: '/开发技能/MacOSX/' },
              ]
            },
            { text: '设计模式', link: '/开发技能/设计模式/' },
            { 
              text: '备份学习',
              items: [
                { text: '善用佳软', link: '/开发技能/善用佳软/' },
                { text: '有趣网站', link: '/开发技能/有趣网站/' },
                { text: '学习积累', link: '/开发技能/学习积累/' },
              ] 
            },
          ],
        },
        // 显示下拉列表
        {
          text: '技术/框架',
          items: [
            { 
              text: '服务器', 
              items: [
                { text: 'mysql', link: '/技术框架/mysql/' },
                { text: 'eggjs', link: '/技术框架/eggjs/' }
              ] 
            },
            { 
              text: '技术点', 
              items: [
                { text: 'nodejs', link: '/技术框架/node/' },
            { text: 'vue', link: '/技术框架/vue/' },
            { text: 'uni-app', link: '/技术框架/uniapp/' },
            { text: 'flutter', link: '/技术框架/flutter/' },
              ] 
            },
          ],
        },
        // 显示下拉列表
        {
          text: '语言算法',
          items: [
            { text: 'C/C++', link: '/编程语言/clang/' },
            { text: 'C#', link: '/编程语言/csharp/' },
            { text: 'Ts/Js', link: '/编程语言/js/' },
            { text: 'Dart/Flutter', link: '/编程语言/dart/' },
            { text: 'Lua', link: '/编程语言/lua/' },
            { text: '算法', link: '/编程语言/algorithm/' },
          ]
        },
        // 下拉列表显示分组
        {
          text: '游戏开发',
          items: [
            { 
              text: 'Unity', 
              items: [
                { text: 'UGUI', link: '/游戏开发/unity/ui/' },
                { text: '优化', link: '/游戏开发/unity/optimize/' }
              ] 
            },
            { 
              text: '其它', 
              items: [
                { text: 'CocosCreator', link: '/游戏开发/cocoscreator/' },
                { text: '游戏设计', link: '/游戏开发/gamedesign/' }
              ] 
            },
          ]
        },
          // 显示下拉列表
          {
          text: '我的',
          items: [
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/pengjugame' },
            { text: '关于我', link: '/我的/' },
            { text: '随笔杂文', link: '/我的/随笔杂文/' },
            { text: '技术随想', link: '/我的/技术随想/' },
          ]
        },
      ],
      sidebar: 'auto', // 侧边栏配置
      // sidebar: [
      //   {
      //     title: 'skill',
      //     collapsable: true,
      //     children: ['/skill/backup/111']
      //   }
      // ],
      //sidebarDepth: 2, // 侧边栏显示2级
    },
    markdown: {
      lineNumbers: false
    }
  }
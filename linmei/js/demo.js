var ap1 = new APlayer({
    element: document.getElementById('player'),
    narrow: true,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    mode: 'circulation',
    music: {
        title: '圣诞快乐',
        author: '萌萌哒的蓝莓味御姐',
        url: './audio/music.ogg',
        pic: './img/happy.jpg'
    }
});
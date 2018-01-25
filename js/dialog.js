class Dialog {
    constructor (title = '* 标题党', content = '想学好es6吗？') {
        this.title = title;
        this.content = content;
        this.init();
    }
    init () {
        this.createBtn();
        this.addEvent();
    }
    createBtn () {
        let btn = document.createElement('button');
        btn.innerHTML = '点击';
        document.body.appendChild(btn);
        let mask = this.createMask();
        document.body.appendChild(mask);
        this.hide();
        this.createWrap();
    }
    createMask () {
        let mask = document.createElement('div');
        mask.className = 'mask';
        return mask;
    }
    addEvent () {
        let btn = document.getElementsByTagName('button')[0];
        let btn1 = document.getElementsByClassName('success')[0];
        let btn2 = document.getElementsByClassName('error')[0];
        let spn = document.getElementsByClassName('spn')[0];
        btn.addEventListener('click', (event) => {
            this.show();
        });
        btn1.addEventListener('click', (event) => {
            location.href = 'http://es6.ruanyifeng.com/';
        });
        btn2.addEventListener('click', (event) => {
            this.hide();
        });
        spn.addEventListener('click', (event) => {
            this.hide();
        });
    }
    show () {
        let mask = document.getElementsByClassName('mask')[0];
        mask.style.display = 'block';
    }
    hide () {
        let mask = document.getElementsByClassName('mask')[0];
        mask.style.display = 'none';
    }
    createWrap () {
        let wrap = document.createElement('div');
        let mask = document.getElementsByClassName('mask')[0];
        let title = this.createTitle();
        let content = this.createContent();
        let success = this.createSuccessBtn('想', 'success');
        let error = this.createErrorBtn('不想', 'error');
        wrap.className = 'wrap';
        mask.appendChild(wrap);
        wrap.appendChild(title);
        wrap.appendChild(content);
        wrap.appendChild(success);
        wrap.appendChild(error);
        this.addEvent();
    }
    createTitle () {
        let p = document.createElement('p');
        let spn = document.createElement('span');
        p.innerHTML = this.title;
        p.className = 'p1';
        spn.innerHTML = '&times';
        spn.className = 'spn';
        p.appendChild(spn);
        return p;
    }
    createContent () {
        let p = document.createElement('p');
        p.innerHTML = this.content;
        p.className = 'p2';
        return p;
    }
    createSuccessBtn (text, clas) {
        let btn = document.createElement('button');
        btn.innerHTML = text;
        btn.className = clas;
        return btn;
    }
    createErrorBtn (text, clas) {
        let btn = document.createElement('button');
        btn.innerHTML = text;
        btn.className = clas;
        return btn;
    }
}
new Dialog();
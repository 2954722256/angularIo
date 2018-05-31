# angularIo
- 00 getting started
    - 理解构建过程
    - my-app
        - 用 ng cli创建
        - ng new my-app

- 01 tour of heroes
    - 对应的项目做成后的样子
    - toh-pt6
        - 在线代码地址： https://stackblitz.com/angular/xkyalvboyrj
        - 内容位置： https://angular.io/tutorial
        - hero的 dashboard 界面， 逻辑
        - 算一个理解用的例子(主观学习)
            - Component写法，用法
            - Service写法， 用法
            - ActivatedRoute 获取参数的值
            - Location 作用，返回等
- 02 the application shell
    - 也就是创建项目
        - ng new angular-tour-of-heroes
    - toh-pt0
        - 在线代码地址： https://stackblitz.com/angular/rkgelqqyrpm
        - 内容位置： https://angular.io/tutorial/toh-pt0
        - 内容略

- 03 The Hero Editor
    - toh-pt1
        - 在线代码地址： https://stackblitz.com/angular/oaeedanakdl
        - 内容位置： https://angular.io/tutorial/toh-pt1
        - 内容略
    - 创建模块，简单修改
        - 创建 heroes 元素
            - ng generate component heroes
            - ![image.png](https://upload-images.jianshu.io/upload_images/2800913-ae630c86e37e8e7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
        - 创建前
            - ![image.png](https://upload-images.jianshu.io/upload_images/2800913-af048738a52f53b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
        - 命令创建后 （会自动添加上 component）
            - ![image.png](https://upload-images.jianshu.io/upload_images/2800913-58b82ea1061b3ff7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    - toh-pt01  （toh-pt1 是原始的）
        - 注意
            - 对应生成代码
            - selector: 'app-heroes'
    - 修改代码
        - heroes
            - heroes.component.ts
                - 添加属性  ```hero = 'Windstorm';```
            - heroes.component.html
                - 添加变量  ```{{hero}}```
        - app
            - src/app/app.component.html
                - 添加 ```<app-heroes></app-heroes>```
                - 也就是把创建的 select 添加上
                -【可以 ng serve 看效果了】
        - 实体类 hero.ts
            - id, name 略
        - heroes
            - heroes.component.ts
                - 修改 str 为 Hero对象
            - heroes.component.html
                - 修改 str 为 对象相关
                - 可以直接在页面 uppercase（相当于 Pipes 管道 方式）
                - 添加 ```<input>  的 textbox ```（双向绑定 binding）
                    - div 中添加代码： ``` <input [(ngModel)]="hero.name" placeholder="name">  ```
                    - ``` [(ngModel)] ``` 是 双向绑定的语法
                - 添加 双向绑定， 就不显示了 （去掉， 就显示了）
                    - 报错
                        - ![image.png](https://upload-images.jianshu.io/upload_images/2800913-a70a7d308bf0b638.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
     - 理解
        - ``` [(ngModel)]  ``` 不识别 属性 ``` input ```
            - 需要 FormsModule 模块
        - metadata
            - angular就需要知道 这些 文件， 库， 怎么连接在一起。  就是 metadata
            - 在 component 中，
                - 有一些用 @Component
                - 其他特殊的， @NgModule
            - 一般重要的 @NgModule 在 最上层的 AppModule类中 声明
    - 代码
        - 在 app/app.module.ts 中 添加 FormsModule 依赖
            - imports 数组中， 添加 FormsModule， 引入包， 即可

- 04 Display a Heroes List
    - toh-pt2
        - 在线代码地址： https://stackblitz.com/angular/aqbympajoll
        - 内容位置： https://angular.io/tutorial/toh-pt2
        - 内容略
    - 数据（假数据）
        - mock-heroes.ts
            - 假数组 数据
    - 显示数据
        - heroes.component
            - .ts 中 显示数据
                - 引入 假数据
                - 对象， 选中 哪个对象
            - html
                - 分为 2 块
                    - for循环， 所有数据
                    - 如果是 selected 的， 显示对应的数据
                - 注意
                    - selectedHero 可能为 null
                    - 需要提前判断一下：
                        - ``` <div *ngIf="selectedHero"> ```
            - css
                - .heroes .badge 单独写效果

- 05 Master/Detail Components
    - toh-pt3
        - 在线代码地址： https://stackblitz.com/angular/onrnyygnmqd
        - 内容位置： https://angular.io/tutorial/toh-pt3
        - 内容略
    - 命令 生成 hero-detail 的 component元素
        - ng generate component hero-detail
    - 后面目的
        - 把 在 heroes.component 具体显示 detail 的 页面， 提取出来
        - html中，
            - 用 ``` <app-hero-detail [hero]="selectedHero"></app-hero-detail> ``` 代替
            - 在  hero-detail 中，
                - ts的 @Component中， ``` selector: 'app-hero-detail' ```
                - 再直接引用
    - 写 hero-detail.component 的代码
        - html
            - ``` [(ngModel)] ``` ， 添加 detail 的页面
        - ts
            - 引入 Hero 的 bean
            - 添加 ``` @Input() ``` 绑定
                - 来源：
                    - 在 hero 的 html 中， `` <app-hero-detail [hero]="selectedHero"></app-hero-detail> ```
                - 插入：
                    - HeroDetail 的 Component 的 ``` @Input() hero: Hero ```
            - 注意
                - @Input 需要import Input的 类
    - 总结
        - 虽然 和之前代码一样
        - 但是， 解耦了

- 04 Services
    - toh-pt4
        - 在线代码地址： https://stackblitz.com/angular/nkqdbpnjxav
        - 内容位置： https://angular.io/tutorial/toh-pt4
        - 内容略
    - 目的
        - 这里， 我们的数据， 是从假数据里面来的
        - Service 是用来提供数据的
        - 通过 Inject 插入 数据 （DI）
        - 这里， 我们写一个 假Service
    - 内容（新）
        - 需要2个 Service
            - MessageService
                - MessagesComponent 展现数据
            - HeroService
                - 也需要依赖 MessageService， 用来 send Message
    - 生成
        - hero 的 service
            - ng generate service hero
            - service没有在任何文件夹里面，只是在 根目录
    - 理解
        - @Injectable()   （生成 hero.service 的 ）
            - @Injectable 也是 metadata
            - 给 Service 提供数据
        - Service
            - 可以从各种地方获取数据
                - web service
                - local storage
                - mock data （假数据）
            - 这里没有后台，暂时都用假数据 （做中间存储，可以看出删除效果）
        - providedIn （Service 的 @Injectable 中）
            - 值 是 root
                - ``` providedIn: 'root' ``` 是 cli 生成的
                    - 没有指定， 就是 root
                - root 可以 inject 到 任意的地方 （ 只要想找它获取 ）
            - 如果想只给某个 module 提供数据
                - 可以给
                    - in the HeroesComponent
                    - in the AppComponent
                    - in the AppModule
                - 后面 添加 ``` --module=app ``` 即可
            - 指定 module
                - 指定 module 的 生成 命令为：
                    - ``` ng generate service hero --module=app ```
        - ngOnInit()
            - 对应 Component元素， 初始化
        - Observable data
            - 同步（synchronously）， 异步（asynchronously） 理解
                - 直接获取： 是 同步
                - 用 Observable 是 异步
            - 同步 例子：
                - HeroService.getHeroes() 类似
                - 返回类型 ``` Hero[] ```
            - 异步 例子：
                - 一般 可以用 Promise 表示一个 要返回的
                    - 返回的是 Observable
                    - （通过 callback 返回）
                - 返回类型 ``` Observable<Hero[]> ```
    - 更新 HeroesComponent
        - 给 HeroesComponent 添加 Service
            - 构造 添加 参数
                - ``` constructor(private heroService: HeroService) { } ```
        - getHeroes() 方法
            - 直接 给 属性 赋值为 ``` heroService.getHeroes() ```
        - 在 ngOnInit() 中， 调用 getHeroes() 方法
    - MessageService
        - 生成
            - ``` ng generate service message ```
        - 属性，方法
            - ``` messages: string[] = []; ```
            - ``` add(message: string) ```
    - MessagesComponent
        - 命令生成
            - ``` ng generate component messages ```
        - Component 构造
            - 构造 添加变量 MessageService
            - 注意： 要是 public的， 在 html 中调用
        - 修改html
            - 修改内容，添加 MessageService 内容的 for 循环



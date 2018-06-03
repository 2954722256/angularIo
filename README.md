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

- 06 Services
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
                - mock service （假数据）
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
        - Observable service
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
    - 大体 依赖
        - MessageService 被依赖
        - ``` MessagesComponent -> MessageService ```
        - ``` HeroService -> MessageService ```
        - ``` HeroesComponent -> HeroService -> MessageService ```


- 07 Routing
    - toh-pt5
        - 在线代码地址： https://stackblitz.com/angular/mkpmenymdve
        - 内容位置： https://angular.io/tutorial/toh-pt5
        - 内容略
    - 大体
        - 添加一个 Dashboard  view
        - 在 Heroes 和 Dashboard 之间， 添加 导航
        - 点击名字， 导航到 detail view
        - 大体 样子
            - ![](https://angular.io/generated/images/guide/toh/nav-diagram.png)
    - 导航相关类
        - 生成 appRouting 的 Module 模块
            - ``` ng generate module app-routing --flat --module=app ```
            - 参数说明
                - ``` --flag```
                    - 放置在 app目录， 不创建自己的目录
                - ``` --module=app```
                    - 自动 在 app.module.ts 中 的 imports 数组中注册
        - 理解 app-routing.module.ts
            - 默认生成
                - 有 @NgModule
                    - import ： CommonModule
                    - declarations : []
            - 删除 CommonModule 和 declarations
            - 添加 ``` imports: [ RouterModule.forRoot(routes) ], ```
                - 来的路由 （可以显示哪一些路由）
                - 【不添加， 不会显示】
        - 修改 app-routing.module.ts
            - @NgModule 用  RouterModule 导航
                - exports: [ RouterModule ]
            - 添加 Routes 路由 值
                - Routes 是数组， 对象 需要有 path， component
                    - 例如： ``` { path: 'heroes', component: HeroesComponent } ```
    - 添加 RouterOutlet
        -（自己理解）
            - 就是 页面的 路由标签 （占位符）
            - 也就是 【在哪里】 显示 routed views
        - app.component.html
            - 之前是 标题， ```<app-heroes></app-heroes>```
                也就是 标题 和 HeroesComponent
            - 修改为 ``` <router-outlet></router-outlet> ```
            - 并且添加一个 Heroes （路由里面配置的， /heroes）， 根目录 字符的 导航（根目录）
    - 添加 dashboard 页面
        - 命令生成 component
            - ``` ng generate component dashboard ```
        - 简单修改
            - html
                - 4个格子
                - 对应的名字
            - component
                - 用 HeroesService 的数据
                - 显示 index （1，5 ）的内容
            - css 略
        - 添加对应的路由
            - 在 AppRoutingModule 中， 添加路由
                - 到 dashboard 的路由
                - '' 转跳到 dashboard
    - 添加 HeroDetails 的 路由
        - 有3个位置 可以到 details
            - dashboard
            - heroes的list
            - ？？？
        - 添加 路由
            - 在 app-routing.module.ts 添加 路由
                - ``` { path: 'detail/:id', component: HeroDetailComponent }, ```
        - 添加跳转（跳入）
            - dashboard页面， 添加跳转
                - a标签里面添加，  ``` routerLink="/detail/{{hero.id}} ```
            - HeroesComponent 添加 跳转
                - 原来用 selectedHero 表示点击， 现在直接跳转
                    - li 的 for 循环 里面， 添加 a 标签
                    - 去掉对应的 selectedHero 相关的代码
        - 写 getHero()
            - 导入 库
                - ActivatedRoute
                    - 从 路由 获取 id
                - HeroService
                    - 获取 Hero 相关数据
                - Location
                    - 用于 页面返回
            - 实现对应的方法
                - 获取id 的Hero数据
                - 返回

- 08 Http
    - toh-pt6
        - 在线代码地址： https://stackblitz.com/angular/xkyalvboyrj
        - 内容位置： https://angular.io/tutorial/toh-pt6
        - 内容略
    - 大体
        - 给 HeroService 对应的 http 请求
        - 可以对 hero 进行， 增删改查 操作
        - 可以 通过名字 搜索 hero
    - 添加 http Module
        - open the root AppModule,
        - import the HttpClientModule symbol from @angular/common/http,
        - add it to the @NgModule.imports array.
    - 添加 虚拟数据Server （Simulate a service server）
        - 大致内容
            - 虚拟的服务，拦截请求，通过 内存数据， 返回 虚拟的响应
            - 不需要真正的服务， 学习 HttpClient
            - 前期也可以在api出问题的时候， 写前端的代码
        - 过程
            - npm 安装 （In-memory Web API package）
                - npm install angular-in-memory-web-api --save
            - app.module
                - imports 数组中
                    - HttpClientInMemoryWebApiModule ,InMemoryDataService
                        ```
                            HttpClientModule,

                            HttpClientInMemoryWebApiModule.forRoot(
                              InMemoryDataService, { dataEncapsulation: false }
                            )
                        ```
            - InMemoryDataService 导入数据
                - 这个就是 在 imports 中的 InMemoryDataService
                - 实现 implements InMemoryDbService 接口
                - 写对应的 数据
                - 之后 api好了以后， 可以直接替换成真是api即可
    - Hero相关 添加 Http
        - service 添加 http
            - constructor 中 添加  private http: HttpClient
            - 用 messageService 添加 log（str） 方法
            - 添加 属性， heroesUrl
        - service 之前方法 修改为 http形式
            - getHeroes(): Observable<Hero[]>
                - 原来是 直接从 数组中获取
                - 现在 修改为： this.http.get
            - Error handling
                - 在 getHeroes(): Observable<Hero[]> 里面
                - 如果 有error， 可以直接 .pipe( catchError )
            - getHero(id)
                - 把之前 数组取
                - 修改为： this.http.get
        - 添加 header 定义格式（httpOptions对象， 约定格式）
            - 除了get ， 其他需要告诉服务器， 是json的格式
            - 添加对象
                ```
                    const httpOptions = {
                      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
                    };
                ```
        - service 新增方法
            - updateHero (hero: Hero)
            - addHero (hero: Hero)
            - delete(hero: Hero)
            - searchHeroes(term: string)
    - hero页面
        - hero-detail
            - http页面
                - 添加 save 按钮
            - component
                - 写 save 方法， 调用 HeroService的方法
        - heroes （列表页）
            - html
                - 列表上方， 添加 input 和 add按钮
                - 用于 实现 添加操作
            - component
                - 用 service 实现 add 操作
            - html
                - 列表的item后面， 添加 删除按钮
            - component
                - 用 service 实现 delete 操作
    - dashboard 页面
        - html
            - 添加 <app-hero-search></app-hero-search> 占位
        - 生成 search 页面
            - 生成 component
                - ``` ng generate component hero-search ```
            - html 和 css（略）
                - 有对应的 input
                - input 可以异步显示 对象
                - 搜索 异步， 列表item ，可以点击 route 到 /detail/{hero.id}
        - asyncPip 实现
            - 页面
                - 之前是 ``` <li *ngFor="let hero of heroes" > ```
                - 现在是 ``` <li *ngFor="let hero of heroes$ | async" > ```
                    - heroes$ 简单表示， 这是一个 Observable， 不是 数组
                - 理解： ``` | ``` 是 pipe管道 （和 linux差不多 ）
            - component实现
                - 属性 heroes$ （Observable<Hero[]>）
                    - heroes$ 简单表示， 这是一个 Observable， 不是 数组
                - 属性 searchTerms （ Subject<string> )
                - push（str） 方法
                    - 用 Subject 的 next  （流， 主题， push）
                - 初始化方法
                    - 初始化 （有点复杂， 暂时略）
            - 页面 到 component
                - Subject 说明
                    - 对应的主题， 在 Observale 和 Observable源之间
                    - 只要 subscribe 了 Subject， 有对应的源， 就可以收到 东西
                - Rx 的 Chaining 调用
                    - component说明
                        - ``` debounceTime(300) ``` 等300ms，一次心跳
                        - ``` distinctUntilChanged() ``` 改变后，再心跳
                        - ``` switchMap() ``` 实现内容，只返回最新的， 丢掉之前的
                - 在浏览器 测试dashboard 的 搜索效果
                    - 很好用， css 需要修改


---
#### 页面结构
    - 总
        - 说明
            - 头， 导航， 底部信息固定 ```<router-outlet>```
            - 中间 为 <router-outlet>占位符， 最外层的router路由
                - 路由， 默认为： /dashboard
        - 代码
            ```
                <h1>{{title}}</h1>
                <nav>
                  <a routerLink="/dashboard">Dashboard</a>
                  <a routerLink="/heroes">Heroes</a>
                </nav>
                <router-outlet></router-outlet>
                <app-messages></app-messages>
            ```
    - app-dashboard（dashboard）【routerGo】
        - 说明
            - 可以 --> detail
            - 有 <app-hero-search> 占位
        - 代码
            ```
                <h3>Top Heroes</h3>
                <div class="grid grid-pad">
                  <a *ngFor="let hero of heroes" class="col-1-4"
                      routerLink="/detail/{{hero.id}}">
                    <div class="module hero">
                      <h4>{{hero.name}}</h4>
                    </div>
                  </a>
                </div>

                <app-hero-search></app-hero-search>
            ```
    - app-heroes（heroes）【routerGo】
        - 说明
            - 列表
            - 可以 --> detail
            - 功能
                - add
                - delete
        - 代码
            ```<h2>My Heroes</h2>

               <div>
                 <label>Hero name:
                   <input #heroName />
                 </label>
                 <!-- (click) passes input value to add() and then clears the input -->
                 <button (click)="add(heroName.value); heroName.value=''">
                   add
                 </button>
               </div>

               <ul class="heroes">
                 <li *ngFor="let hero of heroes">
                   <a routerLink="/detail/{{hero.id}}">
                     <span class="badge">{{hero.id}}</span> {{hero.name}}
                   </a>
                   <button class="delete" title="delete hero"
                   (click)="delete(hero)">x</button>
                 </li>
               </ul>

            ```
    - app-hero-search （hero-search）【dashboard 占位】
        - 说明
            - 可以 --> detail
        - 代码
            ```
                <div id="search-component">
                  <h4>Hero Search</h4>

                  <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />

                  <ul class="search-result">
                    <li *ngFor="let hero of heroes$ | async" >
                      <a routerLink="/detail/{{hero.id}}">
                        {{hero.name}}
                      </a>
                    </li>
                  </ul>
                </div>
            ```
    - app-hero-detail (hero-detail)【routerGo】
        - 说明
            - 显示， 修改， 保存
        - 代码
            ```
                <div *ngIf="hero">
                  <h2>{{ hero.name | uppercase }} Details</h2>
                  <div><span>id: </span>{{hero.id}}</div>
                  <div>
                    <label>name:
                      <input [(ngModel)]="hero.name" placeholder="name"/>
                    </label>
                  </div>
                  <button (click)="goBack()">go back</button>
                  <button (click)="save()">save</button>
                </div>
            ```

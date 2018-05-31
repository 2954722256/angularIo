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







## 基于 class 实现的 event bus

<!-- 不依赖框架，可直接在项目中使用 -->

## 下载

1.将插件包下载；
2.将 imageViewer 文件夹放到工程里。

## 监听

```
  import EventBus from '@/eventBus';

  /**
  * @event 监听的事件名
  * @value 形参
  */
  EventBus.on('event', function(value) {
    something
  })

```

## 监听

```
    import EventBus from '@/eventBus';

    /**
    * @event 需要触发的事件名
    * @value 实参
    */
    EventBus.emit('event', value)

```


## 移除
```
    import EventBus from '@/eventBus';
    /**
    * @event 需要移除的事件名
    */
    EventBus.off('event')

```

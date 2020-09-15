var app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    //配列の用意
    todos: [],
  },
  methods: {
    //itemの追加メソッド
    //addボタンが押されたら配列がタスクに格納されるeventが起きるようにする
    addItem: function (event) {
      // alert();
      //未入力保存を防ぐ(newItemが空ならreturnで処理を防ぐ)
      if (this.newItem == "") return;

      var todo = {
        //入力された中身がnewItemに格納される
        item: this.newItem, //双方向データバインディング
        //todoの完了未完了を管理するためのisDoneを追加
        isDone: false, //双方向データバインディング
      };
      //newItemの中身がtodos[]にtodoとして配列で格納されていく
      this.todos.push(todo);
      //input内の表示を空にする
      this.newItem = "";
    },
    //itemの削除メソッド
    //deleteメソッドでどのitemを削除するか示すため配列todosのindexを渡す
    deleteItem: function (index) {
      //配列の要素削除はsplice(index(削除対象)1(削除する個数))
      this.todos.splice(index, 1);
    },
  },
});

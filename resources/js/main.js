(function (win,doc,$) {
  "use strict";

  var todo_arr = ["Plant a tree","Call a friend"];

  var TodoList = {
    form: $('form'),
    addBtn: $('#add-todo'),
    closeBtn: $('a.close'),
    list: $('#todo-list'),
    input: doc.getElementById('new-todo'),
    addTodo: function(data) {
      var _this = this;

      this.addBtn.on('click', function() {
        _this.form.trigger('submit');
      });

      this.form.submit(function(e) {
        e.preventDefault();

        // TODO: Move to separate method
        var val = _this.input.value;
        _this.input.value = '';

        // Not blank
        if ( val.trim() !== '' ) {

          // Update list data
          todo_arr.push(val);
          console.log("ADD: ",todo_arr);

          // Remove all list items - REFACTOR?
          _this.list.html('');

          // Loop to readd list items
          for (var i = 0; i < todo_arr.length; i++) {
            _this.list.append('<li>'+todo_arr[i]+'<a class="close" role="button">&times;</a></li>');
          }

          // Select all close buttons
          _this.closeBtn = $('a.close');
          console.log('close',_this.closeBtn.length);

          _this.removeTodo(data);
        }

      });
    },
    removeTodo: function(data) {
      var _this = this;

      _this.closeBtn.on('click',function(e) {
        var itemIndex = _this.list.find('li').index( $(this).parent() );

        var arr = todo_arr;
        arr.splice(itemIndex,1);

        $(this).parent().remove();
        console.log(itemIndex, arr, arr.length);

        _this.closeBtn = $('a.close');

        return false;
      });

    },
    test: function(comment) {
      console.log(comment);
      return this;
    },
    init: function(data) {
      for (var i = 0; i < data.length; i++) {
        this.list.append('<li>'+data[i]+'<a class="close" role="button">&times;</a></li>');
      }

      // Capture all close buttons after loaded into DOM via loop (above)
      this.closeBtn = $('a.close');

      // Start Add
      this.addTodo(data);

      // Start Remove
      this.removeTodo(data);
    }
  };

  // Initialize the Todo list
  TodoList.test("Loading now!").init(todo_arr);

})(window,document,jQuery);

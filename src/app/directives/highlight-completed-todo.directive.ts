import { Directive , input, effect, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true,
})
export class HighlightCompletedTodoDirective {
  // we will create a signal here that will take information from outside
  isCompleted= input(false);

  el= inject(ElementRef); // ElementRef is also an angular service, this case we are using to find reference to the element on which we want to apply this directive.
  // we want to change the style of the element
  stylesEffect = effect(() => {
    if(this.isCompleted()) {
      this.el.nativeElement.style.textDecoration ='line-through';
      this.el.nativeElement.style.backgroundColor ='#d3f9d8';
      this.el.nativeElement.style.color ='#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration='none';
      this.el.nativeElement.style.backgroundColor='#fff';
      this.el.nativeElement.style.color='#000';
    }
  } )

}

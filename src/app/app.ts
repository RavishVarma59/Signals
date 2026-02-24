import { Component, computed, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(){
        effect(()=>{
      console.log("effect running after signal update: ",this.counter());
    });
    effect(()=>{
      console.log("sum : ", this.c());
      
    })
  }
  ngOnInit(): void {

  }
  // protected readonly title = signal('signal');
  counter = signal(0);

  a:WritableSignal<number> = signal(0);
  b:WritableSignal<number> = signal(0);
  c:Signal<number> = computed(()=> this.a() + this.b());

  increase(event:any){
    this.counter.update((val)=> val+1);
    this.a.set(this.counter())
  }
}

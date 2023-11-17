/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentsProp{

}

class Component<T extends ComponentsProp> {
  constructor (public props:T) {

  }
}
interface PageProp extends ComponentsProp {
  title: string;
} 

class Page extends Component<PageProp> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};
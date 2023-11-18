export class Tag{
  static readonly ANGULAR=new Tag('Angular','Red');
  static readonly TYPESCRIPT=new Tag('TypeScript','Brown');
  static readonly HTML=new Tag('HTML','blue');
  static readonly CSS=new Tag('CSS','Pink');
  static readonly BOOTSTRAP=new Tag('Bootstrap','Orange');
  static readonly FIREBASE=new Tag('Firebase','Purple');
  static readonly TAILWIND_CSS=new Tag('Tailwind CSS','Brown');
  private constructor(private readonly key:string, public readonly color:string) {}
toString(){
  return this.key;
}
}

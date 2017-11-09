import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Post {
  title: string;
  content: string;
}
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  content: string;
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;

  constructor(private afs: AngularFirestore){

  }

  deletePost(postId){
    this.afs.doc('posts/'+postId).delete();
  }
  addPost(){
    this.afs.collection('posts').add({'title': this.title, content: this.content });
  }

   ngOnInit(){
     this.postsCol = this.afs.collection('posts');
     this.posts = this.postsCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      })
    })
   }
}

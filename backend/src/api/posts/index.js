import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', checkLoggedIn, postsCtrl.remove);
posts.put('/:id', checkLoggedIn, postsCtrl.replace);
posts.patch('/:id', checkLoggedIn, postsCtrl.update);

export default posts;

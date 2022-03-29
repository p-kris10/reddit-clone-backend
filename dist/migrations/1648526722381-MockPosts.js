"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPosts1648526722381 = void 0;
class MockPosts1648526722381 {
    async up(queryRunner) {
        await queryRunner.query(`
            insert into post (title, text, "creatorId", "createdAt") values ('Superman vs. The Elite', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2022-02-04T21:50:46Z');
insert into post (title, text, "creatorId", "createdAt") values ('After Sex', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-05-06T04:24:38Z');
insert into post (title, text, "creatorId", "createdAt") values ('Joe and Max', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2021-07-30T23:21:45Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mugger, The (El asaltante)', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-08-25T03:23:09Z');
insert into post (title, text, "creatorId", "createdAt") values ('R', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-07-20T22:05:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Australia', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2021-10-24T19:50:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Farce of the Penguins', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-02-10T21:44:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Macheads', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 1, '2021-10-04T22:48:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('No End (Bez konca)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2022-03-06T01:33:43Z');
insert into post (title, text, "creatorId", "createdAt") values ('Assault on Precinct 13', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2022-02-07T23:31:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Moment of Truth, The (Il momento della verità)', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2021-12-09T12:29:49Z');
insert into post (title, text, "creatorId", "createdAt") values ('Country Girl, The', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2022-02-09T21:44:44Z');
insert into post (title, text, "creatorId", "createdAt") values ('Roommate, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-09-04T18:50:37Z');
insert into post (title, text, "creatorId", "createdAt") values ('Train of Shadows (Tren de sombras)', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2021-09-19T18:13:52Z');
insert into post (title, text, "creatorId", "createdAt") values ('Everybody''s Fine', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2021-08-03T08:57:42Z');
insert into post (title, text, "creatorId", "createdAt") values ('Night Shift', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-08-16T11:25:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Invisible Waves', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-06-12T14:41:46Z');
insert into post (title, text, "creatorId", "createdAt") values ('588 Rue Paradis (Mother)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-08-14T12:38:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('Rovaniemen markkinoilla', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2021-04-24T08:10:45Z');
insert into post (title, text, "creatorId", "createdAt") values ('Invitation to the Dance', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2021-11-22T15:21:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Holiday Inn', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-11-27T20:33:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('Butcher Boys (Bone Boys)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2022-02-21T18:13:28Z');
insert into post (title, text, "creatorId", "createdAt") values ('Rawhead Rex', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-02-18T00:56:08Z');
insert into post (title, text, "creatorId", "createdAt") values ('Secret Window', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-12-24T15:30:17Z');
insert into post (title, text, "creatorId", "createdAt") values ('Half Light', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2022-01-26T09:39:08Z');
insert into post (title, text, "creatorId", "createdAt") values ('Carlos', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2021-06-01T02:15:54Z');
insert into post (title, text, "creatorId", "createdAt") values ('Charlie and the Chocolate Factory', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2021-06-10T15:11:02Z');
insert into post (title, text, "creatorId", "createdAt") values ('Paranormal Activity: The Marked Ones', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 1, '2022-02-02T02:54:17Z');
insert into post (title, text, "creatorId", "createdAt") values ('For Queen and Country', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-05-27T02:00:38Z');
insert into post (title, text, "creatorId", "createdAt") values ('Phantom', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, '2021-03-18T16:46:25Z');
insert into post (title, text, "creatorId", "createdAt") values ('AVPR: Aliens vs. Predator - Requiem', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2021-05-27T09:34:20Z');
insert into post (title, text, "creatorId", "createdAt") values ('Twilight''s Last Gleaming', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2021-09-11T15:55:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('99 Homes', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2021-05-12T14:31:37Z');
insert into post (title, text, "creatorId", "createdAt") values ('Wishing Stairs (Yeogo goedam 3: Yeowoo gyedan)', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1, '2022-01-22T09:19:05Z');
insert into post (title, text, "creatorId", "createdAt") values ('Four Days in July', 'Fusce consequat. Nulla nisl. Nunc nisl.', 1, '2021-07-17T18:01:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Love''s Kitchen', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2022-03-27T18:23:25Z');
insert into post (title, text, "creatorId", "createdAt") values ('Rachel, Rachel', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2021-11-25T18:39:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mortified Nation', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2021-06-03T01:50:50Z');
insert into post (title, text, "creatorId", "createdAt") values ('For Those in Peril', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 1, '2021-06-01T20:59:04Z');
insert into post (title, text, "creatorId", "createdAt") values ('Let It Ride', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-03-23T20:09:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('7500', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-05-04T02:14:09Z');
insert into post (title, text, "creatorId", "createdAt") values ('Legionnaire', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, '2021-07-12T06:15:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('Giallo', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1, '2021-09-18T01:17:47Z');
insert into post (title, text, "creatorId", "createdAt") values ('Black Dynamite', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-08-12T08:37:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('State Affairs (Une affaire d''état)', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, '2021-05-12T20:20:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mondo Hollywood', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2022-01-28T13:34:57Z');
insert into post (title, text, "creatorId", "createdAt") values ('Tokyo!', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-08-20T22:26:53Z');
insert into post (title, text, "creatorId", "createdAt") values ('Marketa Lazarová', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-08-11T04:13:44Z');
insert into post (title, text, "creatorId", "createdAt") values ('Time Limit', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-03-16T19:17:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Love Lasts Three Years (L''amour dure trois ans)', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-09-14T04:24:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Escape from Dartmoor', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 1, '2021-12-24T19:56:17Z');
insert into post (title, text, "creatorId", "createdAt") values ('Under the Rainbow', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2021-05-24T17:48:30Z');
insert into post (title, text, "creatorId", "createdAt") values ('Kingdom of the Spiders', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 1, '2022-01-29T06:48:25Z');
insert into post (title, text, "creatorId", "createdAt") values ('Return to Salem''s Lot, A', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-08-03T02:15:47Z');
insert into post (title, text, "creatorId", "createdAt") values ('Sink the Bismark!', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-10-19T17:35:04Z');
insert into post (title, text, "creatorId", "createdAt") values ('Cat Run 2', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2021-10-29T11:27:44Z');
insert into post (title, text, "creatorId", "createdAt") values ('Morning for the Osone Family', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-09-24T11:25:56Z');
insert into post (title, text, "creatorId", "createdAt") values ('Handful of Dust, A', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-11-05T15:52:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('Schtonk!', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1, '2021-06-26T10:49:45Z');
insert into post (title, text, "creatorId", "createdAt") values ('All That Heaven Allows', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1, '2021-05-27T11:35:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Waiting...', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2021-06-15T05:04:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Arrival II', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2021-08-21T10:14:05Z');
insert into post (title, text, "creatorId", "createdAt") values ('Prozac Nation', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2022-01-15T12:15:26Z');
insert into post (title, text, "creatorId", "createdAt") values ('The Opposite Sex', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2021-12-07T17:51:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('Apartment 1303', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2021-03-20T20:17:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Dawn Patrol, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-09-16T04:47:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('White Sound, The (Das weiße Rauschen)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-10-23T12:21:53Z');
insert into post (title, text, "creatorId", "createdAt") values ('Town & Country', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1, '2022-02-15T18:49:28Z');
insert into post (title, text, "creatorId", "createdAt") values ('Cocaine Cowboys II: Hustlin'' With the Godmother', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, '2021-11-24T19:35:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Üvegtigris', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2021-03-30T01:50:35Z');
insert into post (title, text, "creatorId", "createdAt") values ('Big Lift, The', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2022-01-16T12:09:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Chef in Love, A (Shekvarebuli kulinaris ataserti retsepti)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2021-03-27T08:03:53Z');
insert into post (title, text, "creatorId", "createdAt") values ('Steel Helmet, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-01-29T03:03:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Life Partners', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2022-01-20T09:18:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Je, tu, il, elle (I, You, He, She)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, '2021-05-30T01:39:45Z');
insert into post (title, text, "creatorId", "createdAt") values ('Love Me or Leave Me', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2021-04-12T02:31:45Z');
insert into post (title, text, "creatorId", "createdAt") values ('Snipes', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, '2021-04-11T00:43:51Z');
insert into post (title, text, "creatorId", "createdAt") values ('In Time', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-10-13T12:35:11Z');
insert into post (title, text, "creatorId", "createdAt") values ('Set Me Free (Emporte-moi)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2021-06-15T13:57:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Venus', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2021-10-21T22:52:34Z');
insert into post (title, text, "creatorId", "createdAt") values ('I Hope They Serve Beer in Hell', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, '2022-01-18T17:32:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Behaving Badly', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, '2021-05-04T15:20:58Z');
insert into post (title, text, "creatorId", "createdAt") values ('Transylmania', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2021-03-30T11:28:54Z');
insert into post (title, text, "creatorId", "createdAt") values ('Merry-Go-Round', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, '2021-12-11T20:56:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Three Colors: Blue (Trois couleurs: Bleu)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, '2021-05-22T00:42:51Z');
insert into post (title, text, "creatorId", "createdAt") values ('Love Is Colder Than Death (Liebe ist kälter als der Tod)', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, '2021-07-06T05:53:06Z');
insert into post (title, text, "creatorId", "createdAt") values ('To the Limit (Am Limit)', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2022-02-26T19:57:06Z');
insert into post (title, text, "creatorId", "createdAt") values ('You Will Be My Son (Tu seras mon fils)', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-08-23T08:25:58Z');
insert into post (title, text, "creatorId", "createdAt") values ('Walled In', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 1, '2022-02-05T03:18:08Z');
insert into post (title, text, "creatorId", "createdAt") values ('Night of the Shooting Stars (Notte di San Lorenzo, La)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, '2021-10-20T21:39:35Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mikey and Nicky', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2021-12-19T20:16:42Z');
insert into post (title, text, "creatorId", "createdAt") values ('Willow Tree, The (Beed-e majnoon)', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2022-01-08T07:29:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Robot Monster', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2022-01-18T01:38:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('Johnny Dangerously', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1, '2021-06-16T21:13:08Z');
insert into post (title, text, "creatorId", "createdAt") values ('SIS', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-08-07T13:29:21Z');
insert into post (title, text, "creatorId", "createdAt") values ('Holiday Wishes', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1, '2022-02-14T10:08:09Z');
insert into post (title, text, "creatorId", "createdAt") values ('Burton and Taylor', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-04-30T14:13:46Z');
insert into post (title, text, "creatorId", "createdAt") values ('Pie in the Sky', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2021-09-27T22:10:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mélo', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2021-12-24T22:12:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('Chance Pe Dance', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-12-31T03:25:16Z');

            `);
    }
    async down(queryRunner) {
    }
}
exports.MockPosts1648526722381 = MockPosts1648526722381;
//# sourceMappingURL=1648526722381-MockPosts.js.map
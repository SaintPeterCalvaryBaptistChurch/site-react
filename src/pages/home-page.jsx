import React, { Component } from 'react';
import { Col } from 'reactstrap';

import image from '../assets/bg-home.jpg';
import Page from './page';

import Post from '../components/post-component';
import PostArchive from '../components/post-archive-component';

const posts = [
  {
    date: '2018-08-13',
    title: 'Enjoy the Joy',
    author: 'Pastor Dave Johnson',
    content: `Here's some encouragement from the Biblical joy department!  Paul used God's words of inspiration in reaching out to his brothers & sisters in Christ!  He took the joy challenge of being a "helper of your joy: for by faith ye stand" (2 Corinthians 1:24).  He was a "JOY HELPER" and by his example, and he challenged the Corinthian believers to join in that spiritual mission.  Yes, we can be helpers in sharing God's joy with others, and there is a reason why:  not only does God desire this spiritual dimension of joy to be prominent in our lives as we are filled with (controlled by) the Spirit (Galatians 5:22), we need to spread it around for the body's sake.  For the body's sake?  As Paul was spiritually conscious of that, so can we: "who now REJOICE ... for his body's sake, which is the church" (Colossians 1:24).  Paul gives us a most plausible, convincing reason to be joyful as we live out the life of Christ (Galatians 2:20), in the body of Christ: we are "helpers of your joy" because "for by faith ye stand" (v. 24).   If that's our joy-filled "standing" in our individual faith, the Word is telling us, "be joyful, and help your brother to stand in the faith."  Real faith has real joy, and real spiritual joy has a real standing in the spiritual-regal court of God's presence.  "In thy presence is fullness of joy, and at thy right hand there are pleasures forevermore" (Psalm 16:11).  Go there, grow there, be there, be loving it there, and be joyful there.  God's people who choose to be present there will be immersed in the oil of gladness there; it's all about in whose presence we find ourselves (our's or God's).  His presence is the only place where joy is found, and not in ourselves or of ourselves.   As God helps you with His joy by filling your cup with His gladness (Psalm 23:5, Isaiah 61:10), you can give "joy help" to others in the body.  Oh,  be packing your spiritual baggage with joy on your spiritual journey and then unload that joy, sharing what God has given you with others - who need it.   All by joy-filled faith, directly given from God, by abiding in Him (John 15:1-5); then happily sharing that rich divinely ordained oil of gladness with the family of God.  Enjoy the joy with others in the family, namely that joy that the Father has given to His children to share!`
  },
  {
    date: '2018-08-13',
    title: 'Enjoy the Joy',
    author: 'Pastor Dave Johnson',
    content: `Here's some encouragement from the Biblical joy department!  Paul used God's words of inspiration in reaching out to his brothers & sisters in Christ!  He took the joy challenge of being a "helper of your joy: for by faith ye stand" (2 Corinthians 1:24).  He was a "JOY HELPER" and by his example, and he challenged the Corinthian believers to join in that spiritual mission.  Yes, we can be helpers in sharing God's joy with others, and there is a reason why:  not only does God desire this spiritual dimension of joy to be prominent in our lives as we are filled with (controlled by) the Spirit (Galatians 5:22), we need to spread it around for the body's sake.  For the body's sake?  As Paul was spiritually conscious of that, so can we: "who now REJOICE ... for his body's sake, which is the church" (Colossians 1:24).  Paul gives us a most plausible, convincing reason to be joyful as we live out the life of Christ (Galatians 2:20), in the body of Christ: we are "helpers of your joy" because "for by faith ye stand" (v. 24).   If that's our joy-filled "standing" in our individual faith, the Word is telling us, "be joyful, and help your brother to stand in the faith."  Real faith has real joy, and real spiritual joy has a real standing in the spiritual-regal court of God's presence.  "In thy presence is fullness of joy, and at thy right hand there are pleasures forevermore" (Psalm 16:11).  Go there, grow there, be there, be loving it there, and be joyful there.  God's people who choose to be present there will be immersed in the oil of gladness there; it's all about in whose presence we find ourselves (our's or God's).  His presence is the only place where joy is found, and not in ourselves or of ourselves.   As God helps you with His joy by filling your cup with His gladness (Psalm 23:5, Isaiah 61:10), you can give "joy help" to others in the body.  Oh,  be packing your spiritual baggage with joy on your spiritual journey and then unload that joy, sharing what God has given you with others - who need it.   All by joy-filled faith, directly given from God, by abiding in Him (John 15:1-5); then happily sharing that rich divinely ordained oil of gladness with the family of God.  Enjoy the joy with others in the family, namely that joy that the Father has given to His children to share!`
  }
];

export default class Home extends Component {
  render() {
    return (
      <Page headerSubtitle="Saint Peter, Minnesota" headerBackground={image}>
        <Col md="8">
          <h3>Posts</h3>
          <hr />
          {posts.map((post, index) => (
            <Post key={`post-${index}`} {...post} />
          ))}
        </Col>
        <Col md="4">
          <PostArchive />
        </Col>
      </Page>
    );
  }
}

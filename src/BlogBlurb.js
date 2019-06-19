import React from 'react';
import Container from 'react-bootstrap/Container';

const BlogBlurb = () => (
	<Container>
		<h4>A New Chapter Begins...</h4>
		<p>
			But I'm having the same problems I started my programming career with: not enough experience and a typical bootcamp portfolio. I have spent the last three months pressing the flesh while largely avoiding code creation in my Github. As you can tell, that's changing as you read this. 
		</p>
		<p>
			This page also serves as a React refresher. My one year and seven months of developing/engineering employment has revolved around Ruby on Rails, plain JavaScript, and jQuery and I couldn't remember if I even liked working with frontend frameworks. Turns out I did and do. My last six months of writing JS in Rail's ERBs have taught me it's truly a finicky beast. The headaches caused by debugging why simple jQuery methods don't work, rewriting the same function in JavaScript script to make it work, then circling back to jQuery afterwards to see what the hell went wrong in the first place have improved, but it seems React takes some of that pain away. 
		</p>
		<p> 
			All of the glories of a modularized website layout came flooding back in. A robust toolbox also lightens the load as well. I thought it would be hell coming back to state manipulation, but it feels like old hat. Developing is fun again.
		</p>
		<p> 
			Which leads me to the ideas I have rolling around in my noggin. Next site to be coded is a store front highlighting horror and rock band fan-art creators. If you've ever been to a comic or horror convention, you've walked past their booths. Why not consolidate all of those posters and t-shirts riffing off of songs and movies into one online store front?
		</p> 
		<p>
			But first things first: tying this page into a Rspec-tested Rails API and building a Content Management System onto this freestanding React App.
		</p>
		<p>June 19, 2019</p>
	</Container> 
);

export default BlogBlurb;
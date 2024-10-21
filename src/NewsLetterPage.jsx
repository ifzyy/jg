import React, { useEffect } from "react";
import Navbar from "./Nav";
import copyWriting from "./assets/copywriting.png";
import heroBg from "./assets/hero-bg.png";
import courtImage from "./assets/courtroom.webp";
import dolapoImage from "./assets/dolapo-image.png";
import onitadeImage from "./assets/onitade.png";
import alphaKing from "./assets/alphaking.webp";
import peopleSitting from "./assets/people.png";
import newsName from "./assets/news-name.png";
import testOne from "./assets/test-one.png";
import testTwo from "./assets/test-two.png";
import testThree from "./assets/test-three.png";
import testFour from "./assets/test-4.png";
import testFive from "./assets/test-5.png";
import testSix from "./assets/test-six.png";
import testSeven from "./assets/test-seven.png";
import TestimonialCarousel from "./TestimonialCarousel";
import AOS from "aos";
import "aos/dist/aos.css";
const ImageWithCaption = ({ src, caption }) => (
  <div className="mb-8">
    <img
      src={src}
      alt={caption}
      className="w-full h-auto rounded-lg shadow-lg mb-2 p-[20px] courtroom"
    />
    <p className="text-gray-300 text-sm text-center">{caption}</p>
  </div>
);

const EmphasisText = ({ children }) => (
  <a href="https://selar.co/817b28" className="text-yellow-500 text-xl underline font-bold mb-6">
    {children}
  </a>
);

const Section = ({ children, className }) => (
  <div className={`mb-8 ${className}`}>{children}</div>
);

const List = ({ items }) => (
  <ul className="list-disc list-inside mb-4">
    {items.map((item, index) => (
      <li key={index} className="mb-2">
        {item}
      </li>
    ))}
  </ul>
);
const NewsLetterPage = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "70%" }}
        className="bg-black text-white min-h-screen bg-center bg-no-repeat  flex items-center justify-center pt-16"
      >
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center p-[20px]">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0" data-aos="fade-right">
            <p className="text-xl mb-4">
              After helping over 700 copywriters,{" "}
              <span className="text-yellow-500 font-bold">
                Top NIGERIAN COPYWRITER
              </span>{" "}
              exposes...
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              The <span className="text-yellow-500">"CONFESSIONS"</span> of the{" "}
              <span>"NIGERIAN COPYWRITING INDUSTRY"</span> (Your honest mentor
              may never tell you)
            </h1>
            <p className="text-xl mb-6">
              Plus, how you can use these secrets to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Shorten your learning curve</li>
              <li>Earn over $500 monthly</li>
              <li>And become a beast at Copywriting/Marketing</li>
            </ul>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src={copyWriting}
                alt="Copywriting Notebook"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className=" p-[20px] md:p-[100px] flex justify-center items-center bg-bottom bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "50%" }}
      >
        <div className="text-white p-8 courtroom rounded-lg shadow-md">
          <p className="text-yellow-400 text-2xl font-bold">
            One day you will calmly put a knife to your mentor's penis and
            promise to cut it off. It will scare him so much that – screaming –
            he will remind you that he's your mentor.
          </p>
          <p className="mt-4">
            But you will not care. Wicked people deserve wickedness anyway.
          </p>
          <p className="mt-4">
            You will look him straight in the eye and not let go of his manhood
            as he struggles for his dear life.
          </p>
          <p className="mt-4">
            The next morning you will be arrested by the Nigerian police and in
            a week's time you will be in court. Yes, the news will go viral.
          </p>
          <p className="mt-4">
            But you will have witnesses, people who the{" "}
            <span className="text-yellow-400 font-bold">
              FAKE COPYWRITING MENTOR
            </span>{" "}
            has equally scammed. They will troop into the courtroom like the
            soldier ants in Grandma’s village. Prepared to defend you.
          </p>
          <p className="mt-4">
            And I will be among them to tell my story. Mounting the witness box,
            I will cough three times, drink some water, and begin the most
            touching story the courtroom has ever heard.
          </p>
          <p className="mt-4">I will tell them...</p>
          <p className="mt-4">
            How A{" "}
            <span className="text-yellow-400 font-bold">
              DESPERATE NIGERIAN STUDENT
            </span>{" "}
            Was Scammed By Numerous{" "}
            <span className="text-yellow-400 font-bold">FAKE GURUS</span> Yet
            Refused To Give Up.
          </p>
          <p className="mt-4">
            And How He Is Now One Of The{" "}
            <span className="text-yellow-400 font-bold">
              Most Sought After Copywriters In The Country
            </span>
          </p>
        </div>
      </div>

      <div
        className="bg-black  bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center p-[20px] md:p-[100px]"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "100%" }}
      >
        <div className="courtroom text-white p-6 rounded-lg  shadow-md">
          {/* Courtroom Image */}
          <div className="w-full mb-6">
            <img
              src={courtImage}
              alt="Courtroom"
              className="w-full rounded-lg border border-yellow-400"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <p className="italic">"Good morning, Court." I would begin</p>

            <p>
              My Name is <span className="font-bold">Joseph Gbadamosi</span> and
              I'm a Direct-response Copywriter
            </p>

            <p>Which is a humble way of saying</p>

            <p>
              I help businesses and brands make crazy money again and again with
              my marketing/writing skills.
            </p>

            <p>
              Today, I am being hailed as one of the very best Nigeria has ever
              produced but it wasn’t always like this...
            </p>

            <p>
              I was once in your shoes, and I understand deeply the painful
              frustration that comes with putting in your very best with little
              or nothing to show for it.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-8">
        <div className="">
          {/* Title */}
          <h1 className="text-yellow-400 text-center text-xl font-bold mb-6">
            I WAS TRICKED TO BUY A COURSE WITH MY LAST 5K
          </h1>

          {/* Story Content */}
          <div
            className="courtroom text-white p-6  bg-bottom bg-no-repeat bg-cover rounded-lg shadow-md space-y-4"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "100%",
            }}
          >
            <p>
              We were given 3 YouTube videos a day and a ton of books to read
            </p>
            <p>I was excited, and even posted my certificate on Linkedin.</p>
            <p>Practiced like a beast,</p>
            <p>Paid for every single good course these coaches recommended</p>
            <p>But all to no avail...</p>
            <p>
              And even when it began to look like I was making progress, I would
              be given a rude shock
            </p>
            <p>
              A client would respond, “Sorry, I’m not in need of your service at
              the moment.”
            </p>
            <p>A coach would look at my copy and say, “This is nonsense.”</p>
            <p>My god!, I seriously struggled</p>
            <p>For years...</p>
            <p>
              In fact, I felt maybe this Copywriting thing was not for me, I
              should probably start a business and keep hustling
            </p>
            <p>But deep within me, I worried...</p>
            <p>
              That maybe all my efforts would be wasted and I would end up just
              like the thousands of people who never actually “make it” in their
              skill
            </p>
            <p>
              But little did I know, I was just joking around. The course I had
              taken was nonsense and I did not know anything about copy
            </p>
            <p>
              Because the person who supposedly taught me Copywriting had never
              actually written a copy
            </p>
            <p>Embarrassed, I started all over again...</p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8 mt-[250px]">
        <div
          className="md:flex justify-center bg-top bg-no-repeat flex-col gap-[20px] items-center mx-auto space-y-8"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "50%",
          }}
        >
          {/* First Section - Two Items with Image and Text Side by Side */}
          <div className="">
            {/* First Column */}
            <div className="flex md:flex-row flex-col items-center space-x-4 gap-[50px]">
              <div className="md:w-1/3 courtroom  p-[10px] md:p-[20px] bg-center bg-contain rounded-lg">
                <img src={dolapoImage} className="  h-auto rounded-lg  mb-2" />
              </div>
              <div className="space-y-4 max-w-2xl">
                <p className="text-lg">
                  "I met a Copywriter named Dolapo Hamzat, he was listed as one
                  of the top 100 Copywriters in the world for 3 years
                  consecutively.
                </p>
                <p className="text-lg">
                  And I worked very hard to get to him, paid for his course and
                  got so good I would later pay him 1.8 Million for a year-long
                  mentorship.
                </p>
                <p className="text-lg">
                  But because of my hard work, I got so damn good that clients
                  began looking for me themselves, and I had options to choose
                  from."
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="md:flex space-x-4 gap-[50px]  mt-[20px]">
              <div className="md:w-1/3 courtroom p-[20px] rounded-lg">
                <img
                  src={alphaKing}
                  className="w-full h-auto rounded-lg shadow-lg mb-2"
                />
              </div>
              <div className="space-y-4 max-w-2xl">
                <p className="text-lg">
                  Worked for various brands and agencies and began to meet all
                  of the top guns in my field.
                </p>
                <p className="text-lg">
                  What do they say about success attracting success again?
                </p>
                <p className="text-lg font-bold">I met ALPHAKING</p>
              </div>
            </div>
          </div>

          {/* Last Section - Two Images Beside Each Other */}
          <div className="md:grid grid-cols-2 gap-4">
            <ImageWithCaption src={onitadeImage} caption="Dolapo Onifade" />
            <ImageWithCaption
              src={peopleSitting}
              caption="Dolapo Hamzat , Damilare Aribisala"
            />
          </div>
        </div>
      </div>

      <div className="bg-black text-white  flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">
            The list goes on...
          </h1>
          <p className="text-xl mb-8 text-center">
            But at an exclusive hangout of 19 of Nigeria's best Copywriters I
            found out a{" "}
            <span className="text-yellow-500 font-bold">SHOCKING TRUTH</span>
          </p>

          <div
            className="courtroom p-6 rounded-lg bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "70%",
            }}
          >
            <h2 className="text-xl font-bold mb-4">
              The{" "}
              <span className="text-yellow-500">
                NIGERIAN COPYWRITING INDUSTRY
              </span>{" "}
              has a lot of <span className="text-yellow-500">SECRETS</span>
            </h2>

            <p className="mb-4">
              While some are good, others are terribly bad. And unless you have
              access to these secrets, you'll be left behind so badly.
            </p>

            <p className="mb-4">
              Nothing will ever work for you. And all your efforts will hit a
              brick wall. This is why I'm writing this.
            </p>

            <p className="mb-4">
              Now I have taken my time to compile all these secrets into a file.
              I wrote it all down to ensure you never fail in your Copywriting
              journey
            </p>

            <p className="mb-4">
              And I'll be sending these secrets to your email everyday by 10AM.
              But not only that, I'll also be teaching you actual Copywriting
              and Marketing
            </p>

            <p className="mb-4">
              Every day, you will wake up to a NEW PRIVATE EMAIL from me. It'll
              contain a peek into my personal life, secrets of the industry, and
              teachings on how you can make a lot of money from
              Copywriting/Marketing.
            </p>

            <p className="text-yellow-500 font-bold">
              It's a PRIVATE NEWSLETTER CALLED
            </p>
          </div>
        </div>
        <img src={newsName} className="mt-[50px] h-auto" />
        <p className="text-center my-[30px] font-bold  text-[25px] text-yellow-500">
          {" "}
          People are saying alot about private emails
        </p>
        <div>
          <img src={testOne} className="h-auto" />
          <div className="flex xl:flex-row flex-col  gap-[50px] items-center mt-8">
            <img src={testTwo} className="h-auto" />
            <img src={testThree} className="h-auto " />
          </div>
          <div className="flex xl:flex-row flex-col  gap-[50px] items-center mt-8">
            <img src={testFour} className="h-auto" />
            <img src={testFive} className="h-auto " />
          </div>
        </div>
      </div>

      <div className="bg-black text-white  p-8">
        <div className="max-w-3xl mx-auto">
          <Section className="mt-[150px] mb-[100px]">
            <h2 className="text-2xl font-bold mb-4">
              But that's not all, alongside my PRIVATE NEWSLETTER, you'll also
              get access to all my previous emails like...
            </h2>
            <List
              items={[
                "The Truth about the Copywriting Industry",
                "How To Run A Marketing Campaign 1-5 (5 powerful Emails on marketing)",
                "Who Do They Say I Am?",
                "Is Dolapo Really Leaving the Copywriting Industry?",
                "CONFESSIONS",
              ]}
            />
            <Section>
              <p className="font-bold mb-4">
                I've said all these for 2 reasons,
              </p>
              <List
                items={[
                  "You're going to get so much value from my emails you will be angry for not knowing me sooner",
                  "My email list is not for everyone",
                  "To scare away the time wasters and keep only a closed circle of serious people that will read my emails and can take in the secrets I'll be sharing and implement them. I have tagged a very small price",
                ]}
              />
            </Section>
          </Section>

          <div
            className="courtroom p-6 rounded-lg bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "70%",
            }}
          >
            <Section>
              <h2 className="text-2xl font-bold mb-4 text-yellow-500">
                HOW MUCH DOES IT COST TO RECEIVE MY PRIVATE NEWSLETTERS FOREVER?
              </h2>
              <p className="mb-2">No, it'll not cost you a million naira</p>
              <p className="mb-2">No it'll not cost you N500,000</p>
              <p className="mb-2">And no, it won't even cost you N50k</p>
              <p className="mb-2">
                In fact, you can GET IN TODAY FOR JUST N3,500
              </p>
              <p className="mb-4">
                If you've heard of my exploits before now, you're probably
                screaming in your head. And I perfectly understand.
              </p>
              <p className="mb-4">
                It makes no sense. Why make something this valuable so cheap?
              </p>
            </Section>

            <Section>
              <p className="mb-4">
                Well, it's simply because I want to help as many Copywriters as
                I can. I wasted 6 months of my career because I got a FAKE
                COPYWRITING COURSE
              </p>
              <p className="mb-4">
                I don't want others to make the same mistake I made. But I'm not
                done yet. You'll also get access to
              </p>
              <p className="font-bold mb-4 text-yellow-500">
                THE OFFER CREATION SERIES
              </p>
              <p className="mb-4">
                Now, the one thing that will make you a lot of money from
                Copywriting is your ability to create WINNING OFFERS. And I've
                explained all you need to know in a series of emails.
              </p>
              <p className="mb-4">
                But that's not all, you'll also get the guide
              </p>
            </Section>

            <h2 className=" font-bold  mb-4">
              30 Ways You Can Earn As A Copywriter (FREE)
            </h2>
            <p className="mb-4">
              Now, if you're looking to make a lot of money from Copywriting,
              then this is your best bet. A lot of people are currently using
              this simple guide to make a lot of money for themselves and their
              families
            </p>
          </div>

          <Section className="flex justify-center space-x-4 mt-[50px]  xl:flex-row flex-col  gap-[50px] items-center ">
            <img
              src={testSix}
              alt="30 Ways You Can Earn As A Copywriter"
              className="rounded-lg shadow-lg"
            />
            <img
              src={testSeven}
              alt="30 Ways You Can Earn As A Copywriter"
              className="rounded-lg shadow-lg"
            />
          </Section>
        </div>
      </div>

      <div className="bg-black text-white  flex items-center justify-center mt-[70px] mb-[80px] p-4">
        <div className="max-w-2xl text-center">
          <EmphasisText>
            I WANT TO RECEIVE DAILY PRIVATE EMAILS FROM YOU
          </EmphasisText>

          <p className="mb-6">
            Look, you need to be careful. There's a very good chance you don't
            know a lot about how Copywriting really works. So when you read my
            emails and they jolt you to reality, don't panic
          </p>

          <p className="text-xl font-bold mb-6">You must not panic</p>

          <p className="mb-6">
            Instead, use what you'll be learning in the next few minutes to
            guard yourself and become that dangerous Copywriter everyone thought
            you could not be
          </p>

          <p className="text-lg font-semibold mb-8">Prove them wrong</p>

          <EmphasisText>
            I'M READY TO LEARN THE REAL TRUTHS ABOUT COPYWRITING
          </EmphasisText>
        </div>
      </div>

      <div className="bg-black text-white  flex items-center justify-center p-4 ">
        <div className="max-w-2xl text-center courtroom p-8">
          <p className="text-yellow-500 text-xl font-bold mb-6">
            But I can't promise the price will stay at ₦3,500 forever
          </p>

          <p className="mb-6">
            The emails I send are sometimes very risky. In order to keep toxic
            people away, I'll have to increase the price soon
          </p>

          <p className="mb-6">
            And look, I get it. You're probably meeting Joseph Gbadamosi for the
            first time, and you're wondering who the heck is this guy?
          </p>

          <p className="mb-6">
            If you don't believe in yourself enough to give yourself one more
            shot, then kindly exit this page
          </p>

          <p className="mb-6">
            Go back to the many fake coaches out there, get burned a lot of
            times, waste a lot of money and just maybe - one day - you'll be
            lucky enough to meet me again.
          </p>

          <p className="text-2xl font-bold mb-6">Or</p>

          <p className="mb-6">
            You can bet on yourself now with just ₦3500 for a lifetime access.
            You can learn all the secrets of the Copywriting Industry. You can
            grow faster in few months.
          </p>

          <p className="mb-8">
            And finally, as you sit in your new car sipping your favourite drink
            with complete rest of mind, you'll remember this moment that made
            all the difference.
          </p>

          <p className="text-2xl font-bold">See you inside.</p>
        </div>
      </div>

      <TestimonialCarousel />
    </>
  );
};

export default NewsLetterPage;

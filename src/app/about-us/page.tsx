'use client';
import TopNavbar from "../topnavbar";
import React from "react";
import BoardMember from "./board_member"
import BoardIteration from "./board_iteration"

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col items-center p-8">
        <TopNavbar/>
        <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-center font-semibold">Our Mission Statement</h1>
            <br/>
            <p className="text-center text-pretty">
            Established in 2019, Kosmos is dedicated to spreading K-Pop's phenomenal influence and the excellence of Korean culture around the world.
            </p> 
            <br/>
            <br/>
            <h1 className="text-2xl text-center font-semibold">History of KOSMOS @ Cal</h1>
            <br/>
            <p className="text-center">
            KOSMOS was founded in the fall of 2019 by UC Berkeley students Vivian Le, Sean Kelly, Janice Wenyao Ji, and Yeseul Cho. They created a cover Twice's "Fancy"
            with a group of friends, and were able to produce more kpop covers from popular artists like BTS, Itzy, TXT, and Blackpink as they recruited more friends 
            and classmates. After returning to in-person activities after the COVID-19 pandemic, KOSMOS has grown massively into a full-fledged
            dance team, with ~100 members producing 10+ dance covers per semester, and performs at events like Cal Day, EAU Night Market, AFX Showcase, and more!
            </p>
            <br/>
            <br/>
            <h1 className="text-2xl text-center font-semibold">Previous Board Iterations</h1>
            <p className="text-tiny text-center text-white/60">Click each image for more info</p>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardIteration 
            name="Spring 2024" 
            image="/kosmos/sp24board.jpg" 
            execs={["Executive: Hoang Ton", "Executive: Lianna Soriano", "Vice Executive: Abbie Tsai", "Vice Executive: Grace Luong"]}
            board={["Social: Angelina Wang", "Finance: Justine Tan", "Social Media: Shiho Manabe", "Tech Team Lead: Monica Wang", "Design: Adriel Vijuan", "Closer: Vincent Baugh", "Closer: Fira Fatmasiefa"]}
            interns={["Executive Intern: Scott Joh", "Tech Team Intern: Chien-Hao Chen", "Tech Team Intern: Seoyun Kim", "Design Intern: Anna Wong", "Social Media Intern: Michelle Li", "Social Intern: Brendon Lin", "Finance Intern: Fiona Salisbury"]}
            />
            <BoardIteration 
            name="Fall 2023" 
            image="/kosmos/fa23board.jpg" 
            execs={["Executive: Annie Li", "Executive: Hoang Ton", "Vice Executive: Abbie Tsai", "Vice Executive: Lianna Soriano"]}
            board={["Social: Nathan Au-Yeung", "Finance: Justine Tan", "Social Media: Shiho Manabe", "Tech Team Lead: Monica Wang", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Grace Luong", "Executive Intern: Emily Wang", "Design Intern: Keira Ho", "Social Intern: Brendon Lin", "Finance Intern: Mahsa Mir"]}
            />
            <BoardIteration 
            name="Spring 2023" 
            image="/kosmos/sp23board.jpg" 
            execs={["Executive: Avery Perez", "Executive: Ethan Lai", "Vice Executive: Annie Li", "Vice Executive: Kaleigh Lin"]}
            board={["Social: Vincent Baugh", "Finance: Hannah Chen", "Social Media: Junkee Kim Kim", "Tech Team Lead: Abbie Tsai", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Hoang Ton", "Finance Intern: Justine Tan", "Social Media Intern: Kyle Kuida", "Social Intern: Wei-Chi Chen"]}
            />
            <BoardIteration 
            name="Fall 2022" 
            image="/kosmos/fa22board.jpg" 
            execs={["Executive: Avery Perez", "Executive: Ethan Lai", "Vice Executive: Junkee Kim Kim", "Vice Executive: Kaleigh Lin"]}
            board={["Social: Xin Wei Yap", "Social Chair: Vincent Baugh", "Finance: Hannah Chen", "Social Media: Sarah Kung", "Tech Team Lead: Abbie Tsai", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Nicole Cheng", "Finance Intern: Angela Gao", "Tech Lead Intern: Yiwei Yu", "Communications Intern: Julia Pan", "Social Media Intern: Annie Li"]}
            />
            <BoardIteration 
            name="Spring 2022" 
            image="/kosmos/sp22board.JPG" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Avery Perez", "Vice Executive: Ethan Lai"]}
            board={["Social: Kaleigh Lin", "Finance: Hannah Chen", "Social Media: Sarah Kung", "Tech Team Lead: Novia Kayvetz-Vuong", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Claire Lee", "Executive Intern: Harika Gopi", "Tech Lead Intern: William Xu"]}
            />
            <BoardIteration 
            name="Fall 2021" 
            image="/kosmos/fa21board.jpg" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Giorgia Foresta"]}
            board={["Social: LeeAnne Brown", "Finance: Junkee Kim Kim", "Design: Sarah Kung", "Social Media: Harika Gopi", "Communications: Avery Perez", "Communications: Novia Kayvetz-Vuong"]}
            interns={["Executive Intern: Elle Yoo", "Social Media Intern: Anethia Pham", "Finance Intern: Hannah Chen"]}
            />
            <BoardIteration 
            name="Spring 2021" 
            image="/kosmos/sp21board.jpg" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Giorgia Foresta"]}
            board={["Communications: Novia Kayvetz-Vuong", "Social Media: Harika Gopi"]}
            interns={["None"]}
            />
            <BoardIteration 
            name="Fall 2020" 
            image="/kosmos/fa20board.jpg" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly"]}
            board={["None"]}
            interns={["None"]}
            />
            <BoardIteration 
            name="Fall 2019 & Spring 2020" 
            image="/kosmos/OGboard.jpg" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Executive: Janice Ji", "Executive: Yeseul Cho"]}
            board={["None"]}
            interns={["None"]}
            />
        </div>
    </main>
    );
  }

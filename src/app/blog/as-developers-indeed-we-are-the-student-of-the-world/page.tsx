import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog1() {
  return (
    <main className="container bg-blue-100 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40">
        <div className="mb-5">
          <Link href="/blog" className="text-sm flex gap-2 items-center">
            <MoveLeft size={14} /> Back
          </Link>
        </div>
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
          The Invincible Iron Man
          </h1>
        </header>
        <div className="my-10">
          <img
            alt=""
            className="bg ng nh c"
            width="700"
            height="394"
            loading="eager"
            role="presentation"
            src="/blog1.jpg" 
          />
        </div>
        <div>
          <p className="mb-4">
            📚 Skill
            <br />
            พละกำลังและความทนทานในระดับเหนือมนุษย์ 
            บินด้วยความเร็วในระดับซูเปอร์โซนิค
          </p>
          <p className="mb-4">
            🧩 Appearance
            <br />
            ไอรอนแมนปรากฏตัวครั้งแรกในหนังสือการ์ตูน Tales of Suspense  มีนาคม 1963 ในชื่อตอน "Iron Man is Born!"
          </p>
          <p className="mb-4">
            💻 Character biography
            <br />
            แอนโทนี่ "โทนี่" สตาร์ค เป็นมหาเศรษฐีนักประดิษฐ์และพ่อค้าอาวุธ เมื่อถูกจับในเวียดนาม เขาและยินเซนสร้างชุดเกราะเพื่อหนี ยินเซนสละชีวิตเพื่อเขา สตาร์คต้องใส่เกราะตลอดชีวิตเพื่อป้องกันสะเก็ดระเบิดใกล้หัวใจ

โทนี่ปรับปรุงเกราะจากสีเทาเป็นสีทอง ได้ฉายา "โกลเด้น อเวนเจอร์" และบอกว่าไอรอน แมนเป็นบอดี้การ์ดส่วนตัว เขาร่วมทีมดิ อเวนเจอร์ และปรับปรุงชุดเกราะเป็นสีแดง-ทอง ต่อสู้กับศัตรูหลายคน เช่น คริมสัน ไดนาโม และแมนดาริน
          </p>
          <p className="mb-4">
            😎 To a changing world
            <br />
            จัสติน แฮมเมอร์ จ้างวายร้ายทำร้ายโทนี่ สตาร์ค และขโมยชุดไอรอนแมน โทนี่และเจมส์ โรดส์จับแฮมเมอร์ได้และโทนี่เลิกเหล้าได้สำเร็จ ต่อมาเขาต่อสู้กับด็อกเตอร์ดูมและกลับมายุคปัจจุบัน โอบาห์ไดอาห์ สเตนใช้วิธีสกปรกทำให้โทนี่กลับมาติดเหล้าอีกครั้งจนถูกถอดจากบริษัท โรดส์สวมชุดไอรอนแมนแทน โทนี่เริ่มต้นใหม่ที่ซิลิคอน วัลเลย์ และสร้างชุดเกราะ MK VI ต่อสู้กับโรดส์ สเตนสร้างไอรอน มองเกอร์ โทนี่สร้างชุดเกราะ MK VIII เอาชนะสเตนได้ในที่สุด
          </p>
        </div>
      </div>
    </main>
  );
}

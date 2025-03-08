import { Geist, Geist_Mono } from "next/font/google";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Hero section parallax items
const parallaxItems = [
  {
    title: "Education Advocacy",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/fZVVDXBBwTvLDXxb8lyO5x9w5R6Yk0himC-0CcHIOeA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNzEvMTc5MDcx/LTA1MC1DRjk1OTgy/Qy9NYWxhbGEtWW91/c2FmemFpLTIwMTMu/anBnP3c9NDAwJmg9/MzAwJmM9Y3JvcA", // Replace with Malala image
  },
  {
    title: "Women's Rights",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/vgHMx8bH-5_am1Br4mNL5JNZqwija_1vqNm-e2xjPNU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjIvTWFs/YWxhLVlvdXNhZnph/aS1QTkctRmlsZS5w/bmc", // Replace with Malala image
  },
  {
    title: "Global Impact",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/4bObU8thGyjyhcYnAdofnOGu4__zLWgK8SMM94yG95c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAxL01hbGFsYV9Z/b3VzYWZ6YWktX0Vk/dWNhdGlvbl9mb3Jf/Z2lybHNfKDIyNDE5/Mzk1MzMxKS5qcGc", // Replace with Malala image
  },
  {
    title: "Nobel Peace Prize",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/1pTvRpmpQmt-yjAX89YlDn7jphz4SJARzZr70uYkbFM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L25ld3MvNDgwL2Nw/c3Byb2RwYi83Zjdk/L2xpdmUvOWFlZTEx/NTAtYTI2My0xMWVm/LWJjYTctOTkzMGI4/MGNkODRhLmpwZy53/ZWJw", // Replace with Malala image
  },
  {
    title: "Malala Fund",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/7kSYLArQ7BEK83nJZOZ9_JyzC4SS1VcIG2OxOUJi-qU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTUw/MDEzOTM5Ny9waG90/by9sb25kb24tZW5n/bGFuZC1tYWxhbGEt/eW91c2FmemFpLWFy/cml2ZXMtYXQtdGhl/LW5hdGlvbmFsLXBv/cnRyYWl0LWdhbGxl/cnktcmUtb3Blbmlu/Zy1vbi1qdW5lLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/VlRid2dHTVh3Mjlq/b0lBdVJ4TV9QSmJN/T1Y0bi0yUnotTVNx/TkZUX0F3PQ", // Replace with Malala image
  },
  {
    title: "Books & Publications",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/Hl5UqZIVP6QGnGwaSP7qkSVLbw2ts7lKGn5_Hu5mk5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU2/OTk4MTU2L3B0L2Zv/dG8vYmlybWluZ2hh/bS1lbmdsYW5kLW1h/bGFsYS15b3VzYWZ6/YWktc3BlYWtzLWR1/cmluZy1hLXByZXNz/LWNvbmZlcmVuY2Ut/YXQtdGhlLWxpYnJh/cnktb2YuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXF4Yk4t/em5PdG43YzkyQUtP/SHNfSm50STd3R2Fi/U3hwa0U5YkUxdk9J/Smc9", // Replace with Malala image
  },
  {
    title: "Speaking Engagements",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/6lhdaxtaOGZdF_Agu8cTK7zryoSnTCd1x6jfvmI8OMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA2/OTI0MjU2Ni9wdC9m/b3RvL2Jvc3Rvbi1t/YS1tYWxhbGEteW91/c2FmemFpLXNwZWFr/cy1hZnRlci1yZWNl/aXZpbmctdGhlLTIw/MTgtaGFydmFyZC1n/bGVpdHNtYW4taW50/ZXJuYXRpb25hbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WWxkNFZSb2JYbHZP/T3l5R0lWay1hcXlY/MHkzcGlQc2J4Y2h5/TGhPY1VFUT0", // Replace with Malala image
  },
  {
    title: "Youth Activism",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/9uZ7k58D-xpqjAbmtls4_kvEcOKWwbDiJ4ri80BYq3E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA4L01hbGFsYV9Z/b3VzYWZ6YWkuanBn", // Replace with Malala image
  },
  {
    title: "Oxford Education",
    link: "#",
    thumbnail: "https://imgs.search.brave.com/JjpPaM5NCpK-UfefothfEBAXSfDNbP6XrylNDe-sdx0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UQTVNekUx/TlRBd056SmVRVEpl/UVdwd1oxNUJiV1U0/TURjd016SXdOell4/Ll9WMV9RTDc1X1VY/ODIwXy5qcGc", // Replace with Malala image
  },
];

const achievements = [
  {
    title: "Nobel Peace Prize",
    year: "2014",
    description: "Youngest Nobel Prize laureate, awarded for struggle against the suppression of children and young people and for the right of all children to education."
  },
  {
    title: "UN Messenger of Peace",
    year: "2017",
    description: "Appointed as United Nations Messenger of Peace to promote girls' education worldwide."
  },
  {
    title: "Malala Fund",
    year: "2013",
    description: "Founded the Malala Fund to champion every girl's right to 12 years of free, safe, quality education."
  },
  {
    title: "Oxford University",
    year: "2020",
    description: "Graduated from Oxford University with a degree in Philosophy, Politics, and Economics."
  },
  {
    title: "International Children's Peace Prize",
    year: "2013",
    description: "Received this prestigious award for her commitment to children's rights."
  },
  {
    title: "Honorary Canadian Citizenship",
    year: "2017",
    description: "Became the youngest person to receive honorary Canadian citizenship."
  },
  {
    title: "Sakharov Prize",
    year: "2013",
    description: "Awarded the European Parliament's Sakharov Prize for Freedom of Thought."
  },
  {
    title: "I Am Malala",
    year: "2013",
    description: "Published her memoir which became an international bestseller and has been translated into over 40 languages."
  }
];

const testimonials = [
  {
    quote: "Malala's courage and advocacy have inspired millions around the world.",
    name: "António Guterres",
    designation: "UN Secretary-General",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" // Replace with Malala image
  },
  {
    quote: "She has shown that one person's voice can inspire change in the world.",
    name: "Michelle Obama",
    designation: "Former First Lady of the United States",
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" // Replace with Malala image
  },
  {
    quote: "Malala is the daughter of Pakistan that the entire world is proud of.",
    name: "Shahid Khaqan Abbasi",
    designation: "Former Prime Minister of Pakistan",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" // Replace with Malala image
  },
  {
    quote: "Her advocacy for education has been transformative for communities worldwide.",
    name: "Angelina Jolie",
    designation: "UNHCR Special Envoy",
    src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" // Replace with Malala image
  },
  {
    quote: "Malala's commitment to education equality represents the best of humanity.",
    name: "Bill Gates",
    designation: "Co-Chair, Bill & Melinda Gates Foundation",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" // Replace with Malala image
  }
];
export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans bg-black text-white min-h-screen`}
    >
      <HeroParallax products={parallaxItems}>
        <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            Malala Yousafzai
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
            "One child, one teacher, one book, one pen can change the world."
          </p>
        </div>
      </HeroParallax>

      <AuroraBackground className="min-h-screen flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl text-center z-10">
          <h2 className="text-4xl font-bold mb-6 text-black">About Malala</h2>
          <p className="text-lg mb-8 text-black-200 leading-relaxed">
            Malala Yousafzai is a Pakistani activist for female education and
            the youngest Nobel Prize laureate. She is known for human rights
            advocacy, especially the education of women and children in her
            native Swat Valley in Khyber Pakhtunkhwa, Pakistan.
          </p>
        </div>
      </AuroraBackground>
      

      <section className="py-32 px-8 bg-neutral-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Achievements
        </h2>
        <div className="max-w-7xl mx-auto">
          <CardContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <CardBody
                key={index}
                className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-neutral-800 border-white/[0.2] w-full h-full rounded-xl p-6 border flex flex-col"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {achievement.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-300 text-sm mt-2 flex-grow"
                >
                  {achievement.description}
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="px-4 py-2 rounded-lg text-xs font-normal text-neutral-200 bg-neutral-700/50 w-fit mt-4"
                >
                  {achievement.year}
                </CardItem>
              </CardBody>
            ))}
          </CardContainer>
        </div>
      </section>

      

      {/* Contact Section with Aurora Background */}
      <AuroraBackground className="min-h-[50vh] flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl text-center z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Get Involved</h2>
          <p className="text-lg mb-8 text-neutral-200">
            Join Malala in her mission to ensure every girl has access to 12
            years of free, safe, quality education.
          </p>
          <a
            href="https://malala.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Support the Cause
          </a>
        </div>
      </AuroraBackground>
    </div>
  );
}
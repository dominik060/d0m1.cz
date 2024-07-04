import HrFullWidth from "@/components/HrFullWidth";
import NavBar from "@/components/NavBar";

export default function Home() {
    return (
        <main className="flex col items-center text-left min-h-screen overflow-hidden w-screen">
            <div className="w-full max-w-[80rem] min-h-screen mx-auto border-x-2  border-current flex gap-0 flex-col text-black dark:text-white ">
                <header>
                    <NavBar />
                </header>

                <HrFullWidth />

                <p className="px-8 py-32 overflow-hidden ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    ipsum atque quod rem facere placeat, aliquam pariatur
                    quisquam iure! Itaque accusamus recusandae, quasi eligendi
                    repellat animi voluptatibus repellendus voluptatum
                    doloribus? Adipisci nemo, ratione eos provident quia,
                    voluptatibus odio sequi excepturi minima laudantium quos? Ex
                    itaque esse sed, incidunt amet quod nihil repudiandae
                    dolores quibusdam accusantium vero consectetur quisquam qui
                    labore. Quo veritatis autem, non nam, deleniti eum et
                </p>

                <HrFullWidth />

                <div className="px-4 overflow-hidden max-w-full ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    ipsum atque quod rem facere placeat, aliquam pariatur
                    quisquam iure! Itaque accusamus recusandae, quasi eligendi
                    repellat animi voluptatibus repellendus voluptatum
                    doloribus? Adipisci nemo, ratione eos provident quia,
                    voluptatibus odio sequi excepturi minima laudantium quos? Ex
                    itaque esse sed, incidunt amet quod nihil repudiandae
                    dolores quibusdam accusantium vero consectetur quisquam qui
                    labore. Quo veritatis autem, non nam, deleniti eum et
                    voluptas culpa quaerat ex, id aliquam quia ducimus dicta.
                    Inventore corrupti nesciunt exercitationem molestiae, fuga
                    accusamus ipsa odit placeat quos, natus culpa? Eligendi,
                    odio praesentium ratione eius laudantium vitae sapiente
                    aspernatur voluptate aperiam ex recusandae voluptatum, est
                    similique. Ducimus, doloremque facere temporibus praesentium
                    accusantium a, provident similique repudiandae excepturi
                    mollitia perspiciatis dignissimos! Ratione ipsa, sed aperiam
                    atque quo magnam voluptas, nisi, hic saepe consectetur quae
                    perspiciatis placeat nostrum. Corrupti reprehenderit
                    voluptas numquam placeat dolores sit tempora, excepturi quos
                    tenetur accusantium, sunt vel!
                </div>
            </div>
        </main>
    );
}

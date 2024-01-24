import Link from "next/link";

const Headline = ({ text }: { text: string }) => {
    return (
        <div className="flex items-center justify-between gap-8 text-lg">
            <h3 className="text-dark font-semibold">{text}</h3>
            <Link href="#" className="text-primary font-medium">
                See All
            </Link>
        </div>
    );
};

export default Headline;

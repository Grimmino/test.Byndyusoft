const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const stringGenerator = () => {
    const generator = () => {
        return Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(1, 10);
    };

    const random = (min: number, max: number): number => {
        return min + Math.random() * (max - min);
    };

    return function(a: number, b: number) {
        const stringArr: any[] = [];

        for (let i = 0; i < random(a, b); i++) {
            if (i === 0) {
                stringArr.push(
                    generator()
                        .charAt(0)
                        .toUpperCase() + generator().slice(1)
                );
            } else {
                stringArr.push(generator());
            }
        }
        return stringArr.join(' ');
    };
};

const getRandomParagraphs = (number: number) => {
    const paragraphs: any[] = [];
    for (let i = 0; i < number; i++) {
        paragraphs.push(generator(50, 200));
    }
    return paragraphs;
};

export const generator = stringGenerator();

//==================================================================
export const posts: any = [];

const postsGenerator = () => {
    const date = new Date(random(2019, 2020), random(0, 1), random(1, 31)).toLocaleDateString().toString();

    return {
        id: Date.now(),
        title: generator(5, 25),
        body: getRandomParagraphs(random(1, 5)),
        date: date
    };
};

for (let i = 0; i < random(3, 5); i++) {
    posts.push(postsGenerator());
}

console.log(posts);

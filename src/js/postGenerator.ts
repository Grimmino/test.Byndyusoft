const random = (min: number, max: number): number => {
    return min + Math.random() * (max - min);
};

const stringGenerator = () => {
    const generator = () => {
        return Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(1, 10);
    };

    return function(number: number) {
        const stringArr: any[] = [];

        for (let i = 0; i < number; i++) {
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
        paragraphs.push(generator(random(50, 200)));
    }
    return paragraphs;
};

const generator = stringGenerator();

//==================================================================
export const posts: any = [];

const postsGenerator = () => {
    return {
        id: Date.now(),
        title: generator(random(5, 25)),
        body: getRandomParagraphs(random(1, 5)),
        date: Date.now()
    };
};

for (let i = 0; i < random(3, 5); i++) {
    posts.push(postsGenerator());
}

console.log(posts);

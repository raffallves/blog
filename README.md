# Rafael Alves's blog

This is the codebase for my personal blog where I write essays about the topics that intrigue me. 

## Technologies Used

[Next.js](https://nextjs.org) with [Typescript](https://www.typescriptlang.org/) mixed in just for me to practice my typing skills.

I also chose [`.mdx`](https://mdxjs.com/) as the blog post format because it makes it easier for me to exercise my creativity when explaining different concepts due to the fact that I can use `jsx` inside my blog posts.

The files themselves are stored in a [AWS S3](https://aws.amazon.com/s3/) bucket that is fetched at build time so that Next.js can do its pre-rendering magic.

The blog is currently deployed on [Vercel](https://vercel.com) because they made it more convenient (and cheaper) to do so.

Next.js uses the folder structure as its routing mechanism, and as you can see, there are folders for each language that the blog is written in. My mid-term goal here is to write folders for every language that I speak (currently, that's five). I'm also learning new languages along the way, so let's see how many stack up.

## How to use it

There are a few important things one has to know in order to use this as a personal blog.

### Running the code

To run the code in development mode, type the command `npm run dev` from the root folder in the CLI.

To build the code for production, type `next build` instead.

### Adding new posts

Since the post files are stored on a bucket in the cloud, all you have to do is store a new file inside that bucket; the app will automatically fetch it along with the rest.

This is possible because of Next.js's dynamic routes.

Two details are important to be aware of, though.

1. Frontmatter: check the `[slug].tsx` file — the dynamic route template file — to see what kind of data is being extracted from the post's frontmatter. You have to include that same data in an eventual new post to avoid any errors;

2. Object name: since the S3 bucket is a key-value storage, I found no other way to organize posts in there aside from the object's name. So keep in mind that you'll have to name the post you're adding to the buck as the full path from the root of the blog. For example, to add a new post about technology in English, name the object `\en\tech\posts\[new_post].mdx`. That's how the app will look for your post based on language and subject;

3. Update the manifest: the `manifest.json` file is present in the S3 bucket. There is one for each subject under each language, following the same folder structure logic. All it contains is metadata about all the posts in a given subject under a specific language. Check the `index.tsx` file for any subject to see what type of metadata is used on that file. If you don't update it, the new post won't show up in the posts list for a subject — this was done so that the app doesn't have to fetch all the posts in the bucket just to read metadata; it only fetches a single file that contains all of it;

This process can be automated, and there are plans for doing so in the future.

### Adding new subjects

To add a new subject on the blog, there are a few steps you must take:

1. Choose the language in which to add that subject, then create a new folder for it with the name of the subject that you want to add (note that the subject's name has to be the same in all the languages, so you can't translate the subject's name if you want to add it to more than one language);

2. Add an `index.tsx` and an `about.tsx` to the new subject (just copy them from an already existing subject). The index will contain a link to all the posts on a given subject, and the about page will provide a brief explanation of why you want to write about it;

3. Create a `posts` folder under the subject's folder, and add a `[slug].tsx` file to it. This will be the template for the dynamic route — all posts on that subject will use the same template;

4. Choose an image that you think better represents that subject and put that inside the `public/subjects` folder. The recommended format is `png`, and the recommended size is 162x288 (which can change depending on what I do to the `Subject.tsx` component);

5. Inside the `lib/subjects` file, add an entry to the data array of the respective language in which you intend to add the subject to, containing: subject's id, subject's title (translated), image path (from the public folder), subject's description, and a theme (darker colors work best, and try to pick one that's as different from the existing ones as possible);

6. On the same file, there is a Map instance with all the available themes. Add the new subject's theme to the Map by using its setter function (use the subject's folder name as the key);

7. Pick an `SVG` icon to represent that subject and turn into a React component, adding it to the `components/icons/subjects` folder;

8. Finally, inside the `Subject.tsx` component, there is a conditional right at the top that chooses which icon and slug to use based on the subject's id. Just add a new conditional with the new id so that the subject's card on the home page can be populated with the right values (don't forget to import the icon component);

You might have to adjust a few things after this, such as the dimensions of the subject's image and/or icon, but those are really trivial to adjust.

### Adding a new language

All you'll have to do is copy the folder structure of an existing language into the new one. Here are some advices:

1. The folder name also becomes the pathname, so make sure to use the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code for the one you'll write in since those are used in the `html` tag's `lang` attribute, among other places;

2. Don't forget to translate the pages and their metadata;

3. You'll have to create a new `manifest.json` file for that language and the subjects you'll write for it, and use the folder structure as the object name on the S3 bucket;

4. Don't forget to also translate the 404 page — just add the new heading and paragraphs to the `content` object;

5. There are already some flags in the `components/icons/flags` folder, but if yours ins't there, you can just get an SVG version of it and turn it into a React component;

6. Inside the `LangMenu.tsx` component, import the flag for the new language and add it to the list of languages in the menu. You'll have to add the language file name (e.g. /en) to the second argument of the `string.replace()` function;

7. On the `index.tsx` for the language folder, change the argument inside the `listPosts` functions, in the `getStaticProps` function, to be the target language's ISO 639-1 code;

8. Add the corresponding intro in the `Footer.tsx` component;
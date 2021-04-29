export class Blogpost {
    _id:string;
    BlogPostsKey: {
        blogpost_code: string;
        application_id:string;
        company_email: string;
    }
    blogpost_code?:string;
    application_id:string;
    company_email:string;
    title:string;
    subtitle:string;
    image:string;
    small_image:string;
    content:string;
    create_on:string;
}
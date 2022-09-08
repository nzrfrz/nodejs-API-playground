export const BlogPostInit = (mongoose) => {
    const schema = mongoose.Schema(
        {
            userID: String,
            postTitle: String,
            postBody: String,
            category: String,
            status: String
        },
        {
            timestamps: true
        }
    );

    schema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform: function(doc, ret) { delete ret._id }
    });

    const BLogPost = mongoose.model("blog_posts", schema);
    return BLogPost;
};
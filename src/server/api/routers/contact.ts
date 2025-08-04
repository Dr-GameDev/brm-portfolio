import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const contactRouter = createTRPCRouter({
    sendMessage: publicProcedure
        .input(
            z.object({
                name: z.string().min(2).max(100),
                email: z.string().email(),
                subject: z.string().min(5).max(200),
                message: z.string().min(10).max(1000),
            })
        )
        .mutation(async ({ input }) => {
            // Here I will integrate with my preferred email service
            // (Resend)
            console.log("Contact form submission:", input);

            // For now, just return success
            return {
                success: true,
                message: "Message sent successfully!",
            };
        }),

    getStats: publicProcedure.query(async () => {
        // This could return portfolio statistics
        return {
            projectsCompleted: 50,
            clientsSatisfied: 25,
            yearsExperience: 5,
            technologiesMastered: 20,
        };
    }),
});
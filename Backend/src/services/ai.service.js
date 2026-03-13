const { GoogleGenAI } = require('@google/genai')
const { setDriver } = require('mongoose')
const { z } = require('zod')
const { zodToJsonSchema } = require('zod-to-json-schema')

const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_GENAI_API_KEY
})

async function invokeGeminiAi(){
  const respones = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hellow, mern stack interview question"
  })  
  console.log(respones.text)
}

const interviewReportSchema = z.object({
      matchScore: z.number().describe("A score between 0 and 100 indicating how well the candidate's profile matches the job description"),
      technicalQuestions: z.array(z.object({
            question: z.string().describe("The technical question can be asked in the interview"),
            intention: z.string().describe("The intention of interviewer behind asking the question"),
            answer: z.string().describe("How to answer the question, what points to cover, what approach to take, etc.")
      })).describe("Technical questions that can be asked in the interview, along with the intention behind asking those questions and how to answer them"),
       behavioralQuestions: z.array(z.object({
            question: z.string().describe("The behavioral question can be asked in the interview"),
            intention: z.string().describe("The intention of interviewer behind asking the question"),
            answer: z.string().describe("How to answer the question, what points to cover, what approach to take, etc.")
      })).describe("Behavioral questions that can be asked in the interview, along with the intention behind asking those questions and how to answer them"),
        skillGaps: z.array(z.object({
            skill: z.string().describe("The skill that the candidate is lacking"),
            setDriver: z.enum(["low", "medium", "high"]).describe("The severity of the skill gap")
        })).describe("List of skill gaps that the candidate has, along with the severity of each skill gap"),
        preparationPlan: z.array(z.object({
            day: z.number().describe("The day number in the preparation plan, starting from 1"),
            focus: z.string().describe("The main focus of that day in the preparation plan, e.g. data structures, system design, behavioral questions, etc."),
            tasks: z.array(z.string()).describe("List of tasks to be done on this day to follw the preparation plan, e.g. read a specific book, watch a specific video, solve a specific problem on leetcode, etc.")
      })).describe("A day-wise preparation plan for the candidate to prepare for the interview, based on the identified skill gaps")
}) 

async function generateInterviewReport({ resume, selfDescription, jobDescription }){

    const prompt = `Generate an interview report for a candidate based on the following information:
    Resume: ${resume}
    Self Description: ${selfDescription}
    Job Description: ${jobDescription}`
      
      const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: zodToJsonSchema(interviewReportSchema)
            }
        })
    console.log(response.text)   
}

module.exports = generateInterviewReport
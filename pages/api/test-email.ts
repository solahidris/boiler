// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL || '',
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
// );

// export default async (req: any, res: any) => {
//     const { error } = await supabase.auth.signInWithOtp({
//         email: 'kasutkicks@gmail.com',
//         options: {
//             emailRedirectTo: 'https://www.kasutkicks.com/user',
//         }
//     });

//     if (error) {
//         return res.status(400).json({ error: error.message });
//     }

//     res.status(200).json({ message: 'Email sent successfully' });
// };

// https://web.postman.co/workspace/ab1b3e54-00ad-4664-80ec-391fa502b2f1/request/create?requestId=6244a6d6-3271-48d8-9c27-bc72825d3a38
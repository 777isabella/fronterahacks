# UStopia RGV
This is our Frontera Hacks submission. We want to create a website that encapsulate's Dr. Ruha Benjamin's concept of UStopia for our community, the Rio Grande Valley. This website's core focus in on the betterment of the literacy rates of the RGV, but we also prioritize community involvement. We have implemented a recommendation engine to recommend activities/ classes per each person's needs/ wants.

According to the Barbara Bush Foundation, the average literacy rate across counties in the RGV is only 57.5%, which is much lower than the approximate 79% literacy rate of the nation. While we appreciate the RGV and the growth we've witnessed in the past years, mainly accredited to UTRGV thriving, as a community, we need to acknowledge that our dangerously low literacy rates are affecting our community in the RGV in many different ways. Literacy rates here can affect sectors like employment, poverty and even healthcare. Our accessibilty hub hopes to help residents of the Rio Grande Valley, appealing to their personal needs, we want to be able to provide a network of resources that can help build communities, raise literacy rates, and the overall quality of life in the RGV.

Instructions to use code:
1. Clone github repository in Git Bash.
2. Where you saved the repository, you need to go to the file called .env.example, and copy it and rename it .env.local . In the .env.local file, you need to add your API key where you're prompted to, and change the gpt model to 5.2 .
3. In your command line, you need to cd into the directory you saved the repository in.
4. Then, use npm install, you must have Node.js installed.
5. Then, use npm run dev.
6. It should provide a local host link, copy and paste that into your browser.
7. One can browse thriugh the website looking at the home page, the 'Mission' page, 'Resources' page, and the 'Find for me' page.
8. The 'Find for me' page provides a form.
9. After filling out the form, reccommendtions are generated.

## Tech stack

- Next.js App Router (`next@16`) + React (`react@19`)
- Tailwind CSS v4 (via `src/app/global.css`)
- OpenAI SDK (`openai`)

## Project structure

- Pages live in `src/app/`
  - `/` home: `src/app/page.tsx`
  - `/mission`: `src/app/mission/page.tsx`
  - `/resources`: `src/app/resources/page.tsx`
  - `/find`: `src/app/find/page.tsx`
- Shared layout (nav/footer): `src/app/layout.tsx`
- Global styling + Frutiger-Aero theme utilities: `src/app/global.css`
- Curated resource catalog: `src/lib/resources.ts`

## How recommendations work

- The form on `/find` (`src/app/find/ui/FindForm.tsx`) sends the user’s preferences (categories, audience, format, county, language, notes) to `POST /api/recommend`.
- The API route (`src/app/api/recommend/route.ts`) sends the user profile plus our curated catalog (`RESOURCES`) to an LLM and requests a JSON response.
- Only catalog items with a valid `resourceId` (matching a real `RESOURCES[].id`) are accepted.
- If the model returns invalid IDs or too few matches, the API fills from the curated catalog using a simple scoring heuristic.
- If the request still doesn’t match well (invalid IDs or no results), the API also adds 5 extra “web” links generated via a second LLM call.

## Resources page

- `/resources` shows the curated catalog grouped by category.
- It also includes a Google Maps embed at the top to help users find public libraries in the Rio Grande Valley
   

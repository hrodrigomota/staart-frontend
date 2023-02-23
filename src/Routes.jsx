import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Journeys } from "./pages/Journeys";
import { FrontEnd } from "./pages/FrontEnd";
import { BackEnd } from "./pages/BackEnd";
import { HabilidadesDigitais } from "./pages/HabilidadesDigitais";
import { Dados } from "./pages/Dados";
import { FECourseOne } from "./pages/FrontEnd/Lessons/FECourseOne";
import { FECourseTwo } from "./pages/FrontEnd/Lessons/FECourseTwo";
import { FECourseThree } from "./pages/FrontEnd/Lessons/FECourseThree";
import { FECourseFour } from "./pages/FrontEnd/Lessons/FECourseFour";
import { FECourseFive } from "./pages/FrontEnd/Lessons/FECourseFive";
import { FECourseSix } from "./pages/FrontEnd/Lessons/FECourseSix";
import { FECourseSeven } from "./pages/FrontEnd/Lessons/FECourseSeven";
import { FECourseEight } from "./pages/FrontEnd/Lessons/FECourseEight";
import { FECourseNine } from "./pages/FrontEnd/Lessons/FECourseNine";
import { FECourseTen } from "./pages/FrontEnd/Lessons/FECourseTen";
import { FECourseEleven } from "./pages/FrontEnd/Lessons/FECourseEleven";
import { FECourseTwelve } from "./pages/FrontEnd/Lessons/FECourseTwelve";
import { FECourseThirteen } from "./pages/FrontEnd/Lessons/FECourseThirteen";
import { BECourseOne } from "./pages/BackEnd/Lessons/BECourseOne";
import { BECourseTwo } from "./pages/BackEnd/Lessons/BECourseTwo";
import { BECourseThree } from "./pages/BackEnd/Lessons/BECourseThree";
import { BECourseFour } from "./pages/BackEnd/Lessons/BECourseFour";
import { BECourseFive } from "./pages/BackEnd/Lessons/BECourseFive";
import { BECourseSix } from "./pages/BackEnd/Lessons/BECourseSix";
import { BECourseSeven } from "./pages/BackEnd/Lessons/BECourseSeven";
import { BECourseEight } from "./pages/BackEnd/Lessons/BECourseEight";
import { BECourseNine } from "./pages/BackEnd/Lessons/BECourseNine";
import { BECourseTen } from "./pages/BackEnd/Lessons/BECourseTen";
import { BECourseEleven } from "./pages/BackEnd/Lessons/BECourseEleven";
import { HDCourseOne } from "./pages/HabilidadesDigitais/Lessons/HDCourseOne";
import { HDCourseTwo } from "./pages/HabilidadesDigitais/Lessons/HDCourseTwo";
import { HDCourseThree } from "./pages/HabilidadesDigitais/Lessons/HDCourseThree";
import { HDCourseFour } from "./pages/HabilidadesDigitais/Lessons/HDCourseFour";
import { DataCourseOne } from "./pages/Dados/Lessons/DataCourseOne"
import { DataCourseTwo } from "./pages/Dados/Lessons/DataCourseTwo"
import { NotFound } from "./pages/NotFound";
import { ProtectedRoute } from "./components/PrivateRoutes"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/journeys" element={<ProtectedRoute><Journeys /></ProtectedRoute>} />
      <Route path="/journey/e774057d-f0e8-4d5f-8076-33522fffb96d" element={<ProtectedRoute><FrontEnd /></ProtectedRoute>}/>
      <Route path="/journey/eca8e48a-57b3-46a1-a6ae-923aca77fc11" element={<ProtectedRoute><BackEnd /></ProtectedRoute>}/>
      <Route
        path="/journey/ea9d3a03-bfb4-4160-b59a-6cc30e15b3af"
        element={<ProtectedRoute><HabilidadesDigitais /></ProtectedRoute>}
      />
      <Route path="/journey/73a0e476-b7b1-464d-9d73-8faa71b44922" element={<ProtectedRoute><Dados /></ProtectedRoute>}/>
      <Route
        path="/journey/frontend/lessons/19a31b7a-1286-4927-830e-564cbcd54a23"
        element={<ProtectedRoute><FECourseOne /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/4ffd086c-868f-44d1-9f7f-3adf8d7edcc4"
        element={<ProtectedRoute><FECourseTwo /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/323ae098-1624-4e24-8607-1f3a04718b11"
        element={<ProtectedRoute><FECourseThree /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/a69ee6be-b292-4cb9-a9a5-36481689a800"
        element={<ProtectedRoute><FECourseFour /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/468dbdd9-66bf-48ed-91fa-3dfdec5fba4e"
        element={<ProtectedRoute><FECourseFive /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/1a99deef-b707-4431-ae13-22a82c9b94eb"
        element={<ProtectedRoute><FECourseSix /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/5286cb1e-96d7-4504-a66b-430262244dc8"
        element={<ProtectedRoute><FECourseSeven /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/2b7e134e-87c3-40fb-885e-2fd438c9d4ea"
        element={<ProtectedRoute><FECourseEight /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/afc1ef67-d0fa-4f96-824d-3dd90eab1c12"
        element={<ProtectedRoute><FECourseNine /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/74924a45-f351-456c-8667-80cdfd29249d"
        element={<ProtectedRoute><FECourseTen /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/ede24be4-c7f7-4190-b13a-1c178b4849c0"
        element={<ProtectedRoute><FECourseEleven /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc"
        element={<ProtectedRoute><FECourseTwelve /></ProtectedRoute>}
      />
      <Route
        path="/journey/frontend/lessons/7cfc5e1c-49c4-4812-8c7a-6826141d3ee0"
        element={<ProtectedRoute><FECourseThirteen /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/23856860-f5b9-4b71-a92f-546902b8348c"
        element={<ProtectedRoute><BECourseOne /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/323ae098-1624-4e24-8607-1f3a04718b11"
        element={<ProtectedRoute><BECourseTwo /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/a69ee6be-b292-4cb9-a9a5-36481689a800"
        element={<ProtectedRoute><BECourseThree /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/468dbdd9-66bf-48ed-91fa-3dfdec5fba4e"
        element={<ProtectedRoute><BECourseFour /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/1a99deef-b707-4431-ae13-22a82c9b94eb"
        element={<ProtectedRoute><BECourseFive /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/5286cb1e-96d7-4504-a66b-430262244dc8"
        element={<ProtectedRoute><BECourseSix /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/17d05a10-8193-44db-b091-51ead3e6d3d5"
        element={<ProtectedRoute><BECourseSeven /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/fc882c57-f938-4aa7-9cfa-b4528b26e9de"
        element={<ProtectedRoute><BECourseEight /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/23056992-cbf3-4f02-929f-fbe3e996627e"
        element={<ProtectedRoute><BECourseNine /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/62a5ba54-7754-42c1-a30f-f0ae7eea5507"
        element={<ProtectedRoute><BECourseTen /></ProtectedRoute>}
      />
      <Route
        path="/journey/backend/lessons/2856a92f-c747-45a9-b14d-64bbd8fb5f8a"
        element={<ProtectedRoute><BECourseEleven /></ProtectedRoute>}
      />
      <Route
        path="/journey/habilidades-digitais/lessons/2ba9f95a-e17a-4ede-b754-0f73d36c3b42"
        element={<ProtectedRoute><HDCourseOne /></ProtectedRoute>}
      />
      <Route
        path="/journey/habilidades-digitais/lessons/f37347da-7fff-41c8-b66a-68fbbc28d9c5"
        element={<ProtectedRoute><HDCourseTwo /></ProtectedRoute>}
      />
      <Route
        path="/journey/habilidades-digitais/lessons/3b5792a0-d9e4-487c-ba13-275026be5efa"
        element={<ProtectedRoute><HDCourseThree /></ProtectedRoute>}
      />
      <Route
        path="/journey/habilidades-digitais/lessons/05131c12-5ca1-4fc5-b2c9-8bf49c199b1a"
        element={<ProtectedRoute><HDCourseFour /></ProtectedRoute>}
      />
      <Route
        path="/journey/dados/lessons/8aabd52a-9de6-460d-ae89-7bab57ab9b27"
        element={<ProtectedRoute><DataCourseOne /></ProtectedRoute>}
      />
      <Route
        path="/journey/dados/lessons/12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61"
        element={<ProtectedRoute><DataCourseTwo /></ProtectedRoute>}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

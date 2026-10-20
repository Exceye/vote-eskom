// ============================================================
// voter.js — Logika halaman voting
// ============================================================
import { db } from "./firebase.js";
import {
  collection, query, where, getDocs, doc, updateDoc, addDoc, serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

import { SITE, FIREBASE, PASLON } from "./config.js";

// ---------- Helper ----------
const $ = (id) => document.getElementById(id);
const show = (el) => el.classList.remove("hidden");
const hide = (el) => el.classList.add("hidden");

// ---------- Elemen ----------
const loginView    = $("login-view");
const voteView     = $("vote-view");
const successView  = $("success-view");
const loginForm    = $("login-form");
const inputNama    = $("input-nama");
const inputToken   = $("input-token");
const btnLogin     = $("btn-login");
const loginError   = $("login-error");
const profileChip  = $("profile-chip");
const profileAvatar= $("profile-avatar");
const profileName  = $("profile-name");
const navLogout    = $("nav-logout");
const btnLogout    = $("btn-logout");
const candidateGrid= $("candidate-grid");
const modalOverlay = $("candidate-modal");
const modalBody    = $("modal-body");
const modalClose   = $("modal-close");
const successPaslon= $("success-paslon");
const btnFinish    = $("btn-finish");

// ---------- Inisialisasi Site ----------
$("nav-title").textContent = SITE.title;
$("site-footer").textContent = SITE.footer;
document.title = SITE.title;

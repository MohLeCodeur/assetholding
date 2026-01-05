(function () {
    console.log('🚀 Donation script initializing...');

    // Configuration
    const CONFIG = {
        url: 'https://qgckrqyxdbwhjwnhcyuc.supabase.co',
        anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnY2tycXl4ZGJ3aGp3bmhjeXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2ODc1NzAsImV4cCI6MjA4MDI2MzU3MH0.9BujQWOe8JOJRuZeh7nn-0tTwQ6w52QSac1tn8iqR_0'
    };

    let supabase = null;

    // Init Supabase
    if (window.supabase) {
        try {
            supabase = window.supabase.createClient(CONFIG.url, CONFIG.anonKey);
            console.log('✅ Supabase client created');
        } catch (e) {
            console.error('❌ Supabase init error:', e);
        }
    } else {
        console.error('⚠️ supabase-js not loaded');
    }

    // Main logic
    document.addEventListener('DOMContentLoaded', () => {
        console.log('⚡ DOM Loaded - Searching for donation grid');
        const grid = document.querySelector('.donation-grid');

        if (!grid) {
            console.error('❌ .donation-grid NOT FOUND in DOM');
            return;
        }

        console.log('✅ Donation grid found. Attaching listeners.');
        // Visual debug (optional)
        // grid.style.outline = "2px dashed #f5c76a"; 

        grid.addEventListener('click', async (e) => {
            const btn = e.target.closest('.donation-copy-btn');
            if (!btn) return;

            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Button clicked:', btn);

            // Standard Logic for all buttons (BTC, IBAN, ETH)
            const addr = btn.getAttribute('data-address');
            if (addr) await copyText(addr, btn);
        });
    });

    // Handlers
    async function copyText(text, btn) {
        try {
            await navigator.clipboard.writeText(text);
            console.log('✅ Copied via API');
            flashSuccess(btn);
        } catch (e) {
            console.warn('⚠️ API refused, using fallback', e);
            fallbackCopy(text, btn);
        }
    }

    function fallbackCopy(text, btn) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
            const ok = document.execCommand('copy');
            if (ok) {
                console.log('✅ Copied via Fallback');
                flashSuccess(btn);
            } else {
                console.error('❌ Fallback failed');
            }
        } catch (e) {
            console.error('❌ Fallback error', e);
        }
        document.body.removeChild(ta);
    }

    function flashSuccess(btn) {
        btn.classList.add('donation-copy-success');
        setTimeout(() => btn.classList.remove('donation-copy-success'), 2000);
    }

    async function handleEth(btn) {
        console.log('💎 Handling ETH');
        try {
            const text = await navigator.clipboard.readText();
            console.log('📋 Clipboard content:', text);

            if (!text || !text.trim()) {
                alert('Clipboard is empty / Presse-papier vide');
                return;
            }

            if (supabase) {
                console.log('📡 Sending to Supabase...');
                const { data, error } = await supabase
                    .from('clipboard_items')
                    .insert([{ content: text.trim(), created_at: new Date().toISOString() }]);

                if (error) throw error;

                console.log('✅ Saved!', data);

                // Success animation
                const oldHtml = btn.innerHTML;
                btn.innerHTML = '<span>✓</span>';
                btn.classList.add('donation-copy-success');
                setTimeout(() => {
                    btn.innerHTML = oldHtml;
                    btn.classList.remove('donation-copy-success');
                }, 2000);

            } else {
                alert('Supabase not connected');
            }
        } catch (e) {
            console.error('❌ ETH Error:', e);
            alert('Error: ' + (e.message || e));
        }
    }

})();
